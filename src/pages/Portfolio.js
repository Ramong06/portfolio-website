import React from 'react';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TwitterCloneModal from '../components/TwitterCloneModal';
import GameBlogVue from '../components/GameBlogVueModal';
import PizzaSite from '../components/PizzaSiteModal';
import EmployeeDirectoryModal from '../components/EmployeeDirectoryModal';
import AskWinstonModal from '../components/AskWinstonModal';
// import { Container, Row, Button } from 'react-bootstrap';

const Portfolio = () => {
    return (
        <div className='portfolio-page'>
        <Navbar2 />
            <Sidebar />
            <TwitterCloneModal />
            <GameBlogVue />
            <PizzaSite />
            <EmployeeDirectoryModal />
            <AskWinstonModal />
            <Footer />
        </div>
    )
}

export default Portfolio;



