import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import ImageOne from '../../images/image-1.png'
import ImageTwo from '../../images/image-2.png'
import ImageThree from '../../images/image-3.png'
import ImageFour from '../../images/image-4.png'
import ImageFive from '../../images/image-5.png'
import ImageSix from '../../images/image-6.png'
// import ImageSeven from '../..images/image-7.png'
import "./styles.scss"
import { useState } from "react";

const portfolioData = [
    {
        id: 2,
        name: "Portfolio",
        image: ImageOne,
        link: 'https://my-portfolio-ivory-rho-46.vercel.app/project'
    },
    {
        id: 2,
        name: "Amazone Clone",
        image: ImageThree,
        link: 'https://devesh-shah24.github.io/Amazone-Clone/'
    },
    {
        id: 2,
        name: "Analog-Clock",
        image: ImageSix,
        link: 'https://devesh-shah24.github.io/Analog-Clock/'
    },
    {
        id: 3,
        name: "KBC-Quiz",
        image: ImageTwo,
        link: 'https://devesh-shah24.github.io/KBC-Quiz/'
    },
    {
        id: 3,
        name: "Tic-Tac-Toe-Game",
        image: ImageFive,
        link: 'https://devesh-shah24.github.io/Tic-Tac-Toe-Game/'
    },
    {
        id: 3,
        name: "Stone Paper & Scissors Game",
        image: ImageFour,
        link: 'https://devesh-shah24.github.io/Stone-Paper-Scissors-Game/'
    },
    
];


const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Development'
    },
    {
        filterId: 3,
        label: 'Game'
    },
];

const Project = () => {
    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredVlue] = useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId)
    }

    function handleHover(index) {
        setHoveredVlue(index)
    }


    const filteredItems = filteredvalue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredvalue);

    return (
        <section id="project" className="project">
            <PageHeaderContent
                headerText="My Projects" icon={<AiFillProject size={40} />} />
            <div className="portfolio_content">
                <ul className="portfolio_content_filter">
                    {filterData.map((item) => (
                        <li className={item.filterId === filteredvalue ? "active" : ""} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                            {item.label}</li>
                    ))}
                </ul>
                <div className="portfolio_content_cards">{filteredItems.map((item, index) => (<div className="portfolio_content_cards_item" key={`cardItem${item.name.trim()}`}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleHover(null)}>
                    <div className="portfolio_content_cards_item_img-wrapper">
                        <a>
                            <img src={item.image} alt={item.name} />
                        </a>
                    </div>
                    <div className="overlay">
                        {
                            index === hoveredValue && (<div>
                                <p>{item.name}</p>
                                <a href={item.link || "#"} target="_blank" rel="noopener noreferrer">
                                    <button>Visit</button>
                                </a></div>)
                        }
                    </div>
                </div>
                ))
                }
                </div>
            </div>
        </section>
    )
}
export default Project;