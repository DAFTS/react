import React , { lazy , Suspense } from 'react';

import { BrowserRouter as Router , Route , Link , Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


import Loading from './components/Loading/Loading'

const Home = lazy(()=>import('./pages/Home/Home'))
const Kinds = lazy(()=>import('./pages/Kinds/Kinds'))

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

          <Link to="/home">首页</Link>
          <Link to="/kinds">分类</Link>
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
