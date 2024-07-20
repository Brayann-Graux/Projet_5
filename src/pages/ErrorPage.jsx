import React from 'react';
import { Link } from "react-router-dom";
import { LayoutHeader, LayoutFooter } from '../Components/Layout';
import "../Styles/ErrorPage.scss"

export function ErrorPage() {
    return <div>
        <LayoutHeader />
        <div className="mainError">
        <p className="numberError">404</p>
        <p className="noPage">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="errorLink">
          Retourner sur la page d'accueil
        </Link>
      </div>
        <LayoutFooter />
    </div>
}