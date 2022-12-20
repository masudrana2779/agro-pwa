import React, {Component} from 'react';
import {getCookie} from "cookies-next";
import Router from "next/router";
import type {NextPageContext} from 'next'
import {pageRedirect, UserType} from "../enum";
import {config} from "../config";
import {User} from "../apiTypes";

async function redirect(res: any, path: string) {
    if (res) {
        // SSR
        res.writeHead(302, { Location: path });
        res.end();
    } else {
        // Client side
        await Router.push(path);
    }
}

const withAuth = (Component: any, {path = 0} = {}) => {

    const Auth = (props: any) => {
        return<Component {...props}/>;
    };

    Auth.getInitialProps = async (ctx: NextPageContext) => {
        let authSession: User;
        const {req, res } = ctx;

        if (req){
            const authData = getCookie(config.cookieName, {req, res});
            authSession = authData && JSON.parse(authData.toString());
        }else{
            const authData = getCookie(config.cookieName);
            authSession = authData && JSON.parse(authData.toString());
        }

        if (!authSession && path !== pageRedirect.LOGIN) {
            await redirect(res, '/login');
        }

        let componentProps = {};
        if (Component.getInitialProps) {
            componentProps = await Component.getInitialProps(ctx);
        }

        return {authSession, ...componentProps};
    }

    return Auth;
};

export default withAuth;
