import React , { lazy , Suspense } from 'react';

import { BrowserRouter as Router , Route , Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


import Loading from './components/Loading/Loading'

const Home = lazy(()=>import('./pages/Home/Home'))
const Kinds = lazy(()=>import('./pages/Kinds/Kinds'))
const Login = lazy(()=>import('./pages/Login/Login'))
const Notmore = lazy(()=>import('./pages/Login/children/notMore'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <Router>
          <Route path="/" exact render={()=>{
            return <Redirect to="/home" />
          }}/>
          <Route path="/home" component={Home} />
          <Route path="/kinds" component={Kinds} />
          <Route path="/login" component={Login} />


          <Route path="/login/notmore" component={Notmore} />

          {/* <div className="link">
          <Link to="/home">首页</Link>
          <Link to="/kinds">分类</Link>
          <Link to="/login">登录</Link>
          </div> */}
        </Router>
      </div>
    </Suspense>
  );
}


const mapStateToProps = ()=>({

})
const mapDispatchToProps = ()=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(App);
