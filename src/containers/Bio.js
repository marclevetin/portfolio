import React, { Component } from 'react';

class Bio extends Component {
  constructor(props){
    super(props)
    this.state = {
      interestLevel: 1
    }
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>As a Professional</h2>
        <p>I’m a teaching assistant at the UNH Coding Bootcamp.  There, I teach aspiring web developers the ins and outs of the technologies, languages, and frameworks that they need to build website.  I also help them transition their headspace from whatever they did before, to coding.  The curriculum is based around JavaScript and associated web technologies. and includes: HTML, CSS, vanilla JavaScript, jQuery, React, MongoDB, Firebase, Sequelize, Handlebars.</p>
        <p>I went to Launch Academy.  Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team.  Learn more at launchacademy.com</p>
        <p>I’m an Agile product manager.  My experience is a 60/40 split between strategic and technical product management.  I’ve worked with teams in the property management, contractor management, and email marketing/marketing automation industries.  I have experience with translating user requirements to consumable user stories, UAT, writing QA test cases, writing business cases, marketing new features, and getting buy-in at all levels of an organization.</p>
        <p>I’ve led a product support and sales organization.  I was Buildium’s original product support guy.  As the company grew, so did the team and its responsibilities.</p>
        <h2>As a Human</h2>
        <p>I’m a musician.  I got my start on alto saxophone in the 4th grade and continued through high school in concert, marching, and jazz bands.  I earned a BA in Music (basson) from Syracuse University.  My current focus is ukulele.  It’s a hobby and a way to inspire my daughter to get into music as she grows up.</p>
        <p>I’m a dancer.  I've taught 1000s of people to dance in Greater Boston and Syracuse.  At points in the past, I was a competitor in lindy hop and west coast swing on the national circuits.  I’ve taught 1000s of people to dance over the years in the Boston area.  And I’ve helped organize, market, and score dance events, like Swingin New England and Swinging Into Spring.</p>
        <p>I’m published on Amazon.  I’m not an accountant, but I play one on TV.  While at Buildium, we needed a way to help the marketing folks understand the product they were selling.  I wrote a thing, it got out of hand, and now you can buy it.  Pretty cool, huh?</p>
        <p>I tell jokes.  Most of them are simply awful.  But since “dad humor” is in right now, it works.  You’re looking at a guy who got another guinea pig specifically so he could name the pair “Pinball and Wizard”.</p>
      </div>
    )
  }
}

export default Bio;
