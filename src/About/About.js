import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
      <div className='about-banner'>
        <h2>About</h2>
      </div>
      <div className='about-wrapper'>
        <p>This league was conceived in 2020 over dinner after we had a discussion on how we wanted new and exciting rules in fantasy football. We came up with an auction/keeper league that uses a Tiered-PPR system. <br /><br />


          Auction draft was something not very many of us had experience with but we were excited to try a new format for drafting. A few mistakes were made for our first time but I think we made the right decision going auction. Everyone is allowed a $200 salary cap to spend on the draft. This is going to allow constant engagement during the duration of the whole draft, instead of waiting around for your pick again. There are many strategies to approach an auction league, especially when it comes to nominations and driving prices up for other managers. <br /><br />

          Another addition to the league is the ability to keep up to three players for the following year with a ‘keeper tax’ so to speak. If you choose to keep a player, their salary is increased by five dollars and is automatically deducted from your salary cap before draft day. We went back and forth about how complex we wanted this system to be, but for now we’re planning on keeping it simple so all the managers can get acclimated to the rules. <br /><br />

          We chose to remove kickers and defense as those positions are not highly researched. In replace of not having a kicker/defense system, we replaced it with a superflex option. This means you can flex a WR/RB/TE/QB. This isn’t necessarily a 2QB league, but it’s the option to play an extra QB if you believe they’ll outperform the rest of the your team that week. This really drains the QB market during the draft and makes it hard to acquire another solid QB during the season. You’ll have to make some hefty sacrifices if you want to replenish your QB core. <br /><br />

          Traditionally we play a Half-PPR league. Since we use the Sleeper platform we have the ability to control how many points are gained for every ten receiving yards. The idea of a Tiered-PPR system is still very new and only Sleeper allows us to do this. It brings more balance to the WR/RB divide. With stud wideouts now having the ability to gain substantial points comparative to elite running-backs. <br /><br />

          Our goal while making this league was to bring back some excitement in fantasy. With fresh rules and experimental regulations. We don’t know if it’s going to work out the first year, but we’re willing to try. Perfection takes time.</p>
      </div>
    </div>
  )
}

export default About;