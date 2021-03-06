/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { GlobalStyle } from '../styles/global-styles'

import { Home } from './pages/Home/Loadable'
import { NotFoundPage } from './pages/NotFoundPage/Loadable'
import { ChatRoom } from './pages/ChatRoom/Loadable'

export function App() {
  const { i18n } = useTranslation()
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Ngobrol"
        defaultTitle="Ngobrol"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A chat room application" />
      </Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/room/:id'}
          component={ChatRoom}
        />

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}
