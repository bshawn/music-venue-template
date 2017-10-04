import React, {Component} from 'react';
// import { NavLink } from 'react-router-dom';

import Container from './Container';
import about from '../images/about.jpg';
import church from '../images/church.jpg';
import stage from '../images/stage.jpg';


class About extends Component {
    render() {
        return (
            <Container>
                <h3 className="about-header">About Us</h3>                
                <section className="about-content">
                    <div className="p1-container about-p">
                        <img src={church} alt="about" className="about-image" />
                        <p> Beginning in early 2017, 5 Points Music Foundation’s mission is to pursue the power of sound in all it’s glory through live events and programs that support music therapy, music education, and hearing loss advocacy. Tyler Godsey, founder and Director, has 2 children, both of whom were born with profound hearing loss. At the ages of 11 months old, both children were lucky enough to receive cochlear implants, giving them the gift of sound. It is this gift that serves as the genesis for what we do and why we do it.</p>
                    </div>               
                        <p className="about-p">As described by our founder, “One of the most profound experiences of my life was the moment that we first turned on our son’s implants. Being able to hear my wife say to my son, “I love you,” was the most powerful sounds I have ever heard.” Three simple words… three simple vibrations can create such an immense impact on our emotional and physical states established the vision that has become 5 Points Music Foundation.</p>
                        <div className="p3-container about-p">
                        <img src={stage} alt="about" className="about-image"/>
                        <p>Our live events, featuring performers from across the country and beyond, celebrate the power of music to unite our audiences and fans from far and wide, while providing a critical platform to support our group music therapy program and raise awareness and support for those with hearing loss. Part of this includes creating full access concert experiences for those with hearing loss.To us, sound is not just meant to be heard. Rather, it is meant to be felt and seen as well.  With our <span>Subpac Initiative</span>, efforts to bring in ASL interpreters, preferential seating, professional lighting designs, or the future installation of an <span>inductive loop</span>, our goal is to facilitate the various ways in which those with hearing loss can benefit from the power of live music.</p>
                    </div>
                        <div className="p1-container about-p">
                        <img src={about} alt="about" className="about-image" />
                        <p>Operating out of the Sanctuary in Roanoke, VA, an old church featuring a 2,000 sq/ft performance hall with a capacity just over 250 and a lower lever co-working space dedicated to music teaching studios, creative suites, and a 1,000 sq/ft rehearsal stage available for band rehearsals, classes, and various community uses. The Sanctuary is available for <span>private rentals</span> to host weddings, banquets, birthday parties, and more.</p>
                    </div>  
                        <p className="about-p">As a non-profit organization, our program funding is supported by our live events, special programming, and the amazing support of our donors and sponsors.</p>
                </section>
                </Container>
        );
    }
}

export default About;