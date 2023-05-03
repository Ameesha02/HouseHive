import React from 'react';
import Header from './component/Header';
import Filter from './component/Filter';
import Cards from './component/Cards';
import Footer from './component/Footer';
import Content from './component/Footer/content';
import "./index.css"

const MainPage = ({ selectedFilter, setSelectedFilter, list, list2 }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 800;

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
 
  return (
    <>
      <Header />
      <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      {selectedFilter === 0 ? <Cards list={list} /> : <Cards list={list2} />}
      {/* <Content className="content"/> */}
      {width <= breakpoint &&  <Content/>}
      <Footer />
    </>
  );
};

export default MainPage;