import React from 'react'
import Workcappy from '../../images/WorkCappy.svg'
import screen1 from '../../images/screen.png'
// import '../../css/Project.css'

function Projects() {
  return (
    <div>
      <div className="background-blue">
        <div className="header container mx-auto text-center pt-24 pb-48 text-white">
          <h1 className="text-3xl pb-10">WorkyCappy Bank<span className="yellow">.</span></h1>
          <p className="yellow py-8 uppercase font-bold">Roles I played</p>
          <ul className="flex justify-around">
            <li className="list-disc">User Experience (UX) Designer</li>
            <li className="list-disc">User Interface (UI) Designer</li>
            <li className="list-disc">Interaction Designer</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto">
        <div>
          <h2>Project Overview</h2>
          <p>
            Working Capital is money set out specifically for starting up and maintaining a business. Often times due to what life throws at us, we often find ourselves taking money which we at the onset set out for business to meet basic needs. This is a major reason why businesses fail because consistent execution of an act like this would run down the business in no time.
        <br /><br />
        WorkyCappy Bank is a platform aimed at helping businesses ensure that their working capital is used specifically for the purpose it was set out. This goes a long way in ensuring businesses grow into owner’s dream plan.
        </p>
          <img src={Workcappy} alt='Workcappy banner' />
        </div>
        <div>
          <h2>The Challenge</h2>
          <p>The major challenge i encountered was trying to position this app so it fulfils the purpose for which it was set up since this app is majorly trying to teach individuals a new habit. A habit of making a decision and keepng to it no matter what challenges you face. I focused on trying to build a system where the users are given the best options while still ensuring minimalism, simplicity and maximum functionality.</p>
        </div>
        <div>
          <h2>Market Research</h2>
          <p>Starting off, I conducted a primary research. The aim was to understand appropraitely how individuals do business. This includes what scale of business they run and how most of them access the goods they sell including how payment is made. The main goal was to understand and easily connect user goals to business goals.</p>
          <p>As soon as i Understood how to connect the user and business goals, i conducted a more extensive research. This was focused more on empathy and the need to gather data that will aid me in creating a system that isn’t just aesthetically pleasing but one that is efficient.</p>
        </div>
        <div>
          <h2>The Solution</h2>
          <p>
            Through my research, I developed some high level product requirement for WorkyCappy. I was also able to establish several levels of attainment for the product. The Product has two major sections; the first section is strictly for the individual to access his working capital. Here, his options are limited to just sending the money in this wallet out to suppliers he has added to his list. This limits him from using money specifically for his business for other purposes. The second section is his profit wallet. This is where the user stores his profits from any transaction made. He can choose to move funds from his profit wallet to his working capital wallet. For any fund received, the user is prompted to split the funds into his respective wallets. This gives the user the liberty to sort his funds the way he wants to.
          <br /><br />
          The WorkyCappy Bank app goes a long way in letting users loan out money to family or friends and also updates them on any activities the borrower performs. They just have to add the individual to their Network. This helps the user ensure that funds they lent out are used for its intended purpose
          </p>
        </div>
        <div className="block lg:flex">
          <img src={screen1} alt="screen1" className="mx-6" />
          <img src={screen1} alt="screen1" className="mx-6" />
          <h1 className="text-3xl m-auto">Home Screen<span className="yellow text-5xl">.</span></h1>
        </div>
      </div>
      <div className="bg-gray text-center container-fluid py-8">
        <h2>Navigation Bar<span className="text-6xl yellow">.</span></h2>
        <div className="container mx-auto flex flex-wrap justify-between">
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
        </div>
      </div>

      <div className="container text-center mx-auto">
        <h2>Section One (Working Capital</h2>
        <p>This section focuses on ensuring that the users intended working capital is secured to a great extent. It limits the users options to being able to send out funds from this wallet to only individuals he has added to this suppliers list. This way, money only leaves his wallet directly to the account of who he purchases goods or services from.</p>
        <div className="flex flex-wrap justify-between">
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-center">Transaction Management</h2>
        <p> For an app that is intended to help people make finance related decisions and stick to it, it is of essence to create an avenue for them to split any funds received. This way they are able to differenciate profit from capital. The app enforces this mandatory function by giving a continuous notification until the user splits funds as without completing this process, the amount received won’t reflect on users balance.</p>
        <div className=" flex flex-wrap justify-between">
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-center">Section Two (Profit Wallet)</h2>
        <p> This section serves as a wallet where the user saves his extra. The user can choose to intentionally send funds from this wallet to his working capital balance. He can also choose to loan out money to friends or family and be able to track what use the fund is put to especially if the fund was lent out as capital to run a business. By adding individuals to a Network, you receive updates on what transactions they perform.  </p>
        <div className="flex flex-wrap justify-between">
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
        </div>
      </div>
      <div className="bg-gray text-center container-fluid py-8">
        <h2>Navigation Bar<span className="text-6xl yellow">.</span></h2>
        <div className="container mx-auto flex flex-wrap justify-between">
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
          <img src={screen1} alt="screen1" className="m-6" />
        </div>
      </div>
      <div className="container mx-auto pt-6 pb-16">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com" className="font-bold inline-block pt-6 ">View Working Capital Wallet Prototype Here</a><br/>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com" className="font-bold inline-block pt-6 ">View Profit Wallet Prototype Here</a>
      </div>

    </div>
  )
}

export default Projects
