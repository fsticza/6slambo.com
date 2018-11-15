<template>
  <div class="index">
    <header class="section section--head">
      <div class="container">
        <img class="mb-4 top-logo" src="@/assets/img/6slambo-logo.svg" height="44" alt="">
        <div class="row">
          <div class="col-md-6">
            <div class="head-deco">
              <h1 class="section__lead">
                Guaranteed token sale success for ICO founders
              </h1>
              <div class="section__subtitle">
                We’ll get you there, hassle-free!
              </div>
            </div>
            <a href="" class="btn btn-light text-white">Contact us now to tell you how</a>
          </div>
        </div>
      </div>
    </header>

    <section>
      <div class="section section--dark-gray">

        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5">
              <h1 class="section__title">What we do</h1>
              <h2 class="section__lead">
                No marketing team? No problem!
              </h2>
              <p>
                You know your business inside and out. You came up with a solid idea, 
                worked out the details, picked your audience and understood how your 
                idea is better for them. What you need is the expertise to leverage 
                that knowledge, reach them with valuable, informative content and turn 
                them into investors.
              </p>
              <p>
                That's where 6S•LAMBO comes in. We are masters of ICO and STO marketing.
                Through educational marketing, social media, best in class PR content 
                and a presence in niche forums, we tailor your message to support the 
                interests of the target audience. We provide access to dozens of 
                opinion leaders on LinkedIn and Twitter and take care of PR 
                distribution in both the mainstream and cryptomedia space. Our process 
                is evidence-based, strategic, and doable. And we don't stop until we 
                see results.
              </p>
            </div>
            <div class="col-md-6 offset-md-1">
              <div class="embed-responsive embed-responsive-16by9 video-bg">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="row align-items-end">
            <div class="col-md-6">
              <img src="@/assets/img/image.jpg" alt="" class="img-fluid">
            </div>
            <div class="col-md-6">
              <div>
                Our content marketing strategy will tell your audience how awesome 
                your product or service is, and tell them how they can be part of that
                awesomeness. It will convert interest into sales, and prospects into 
                long-term loyal customers.

                <router-link to="/ico-marketing" class="inline-link mt-4">Read the specifics of our go-to-market product</router-link>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-6 offset-md-6">
              <a href="#contact" class="btn btn-light">Contact us now</a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="section section--testimonials">
      <div class="container">
        <testimonials />
      </div>
    </section>

    <section class="section section--light">
      <div class="container">
        <h1 class="section__title">About US</h1>
        <div class="row">
          <div class="col-md-6">
            <h2 class="section__lead">A few words about who we are</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <p class="font-weight-bold">
              6S•LAMBO is the brainchild of Mátyás Záborszky, who has worked as a 
              marketing and PR expert for over 15 years, consulting in over 20 
              countries for companies such as BMW, Lufthansa, LG and Samsung. An 
              early advocate of cryptocurrencies, he found a lack of best practices 
              and great ideas that failed, because the necessary information didn’t 
              reach the right audience and/or not enough focus was placed on 
              building trust with potential investors.
            </p>
            <p>
              While working as an advisor for several high-profile crypto 
              organizations, such as Bitcoinist and Bitcoin.com, he established a 
              simple 6-step method for all but guaranteed success in the industry’s 
              first go-to-market handbook: “6 Proven Steps to Attract ICO Investors.”
            </p>

            <p>
              Although following the 6-step method is a surefire path to success for
              any ICO organization, not all ICOs have an extensive in-house 
              marketing and PR department at their disposal. Záborszky founded 
              6S•LAMBO to provide an end-to-end integrated solution, leveraging 
              the 6-step methodology with the goal of helping ICOs and STOs find 
              and connect with their audience, build their trust and turn them into
                investors. The company comprises a highly experienced team of 
                international marketing, media, finance and tech advisors, with 
                specific skills in assisting clients with their tokenized funding. 
                Most clients only get to do this once – we’ve done it many times!
            </p>
          </div>
          <div class="col-md-5 offset-md-2 mt-5 mt-md-0">
            <div class="about-top-img text-right">
              <img src="@/assets/img/matyas-nyers.jpg" class="img-fluid" alt="">
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-5">
            <p class="font-weight-bold">
              A former wakeboard world champion and professional athlete, Mate Tokay
              got into the crypto currency business mining Bitcoin. 
            </p>

            <p>
              In 2013 he co-founded Bitcoinist a cryptocurrency and blockchain news 
              site. He is presently the COO of Bitcoin.com, the premier source for 
              everything Bitcoin related. Mate focuses on a larger vision and 
              communicating that vision to others, while staying on top of trends in
              the industry. His goal and passion is to make cryptocurrencies widely
                popular and accessible to all. He is a frequent invitee to 
                conferences and panels to speak on the importance of transparency 
                and legitimacy in the bitcoin industry. He is our Chief Evangelist 
                and the heart and soul of the company.
            </p>

          </div>
          <div class="col-md-5 offset-md-2 mt-5 mt-md-0">
            <div class="about-bottom-img text-right">
              <img src="@/assets/img/mate-tokay.jpg" class="img-fluid" alt="">
            </div>
          </div>
        </div>



      </div>
    </section>
    
    <link-section />

    <section class="section section--team">
      <div class="container">
        <h1 class="section__title text-center">Team</h1>
        <h2 class="section__lead text-center">Meet The Team</h2>
        <h3 class="h5 text-center mb-5">Our world class experts will guide your great idea to a knockout token sale!</h3>

        <div class="row">
          <div class="col-lg-6 member-col" v-for="({title, description}, index) in members" :key="index">
            <article class="member">
              <div class="member__img-wrapper">
                <img class="member__img" src="@/assets/img/member.jpg" alt="">
              </div>
              <div class="member__body">
                <h1 class="h2">{{title}}</h1>
                <p>{{description}}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <article id="contact" class="section section--yellow">
      <contact-section />
    </article>
    <footer-section />
  </div>
</template>

<script>
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import LinkSection from "@/components/LinkSection";
import FooterSection from "@/components/FooterSection";
export default {
  name: 'Index',
  data() {
    return {
      members: [
        {
          title: "The Chief",
          description:
            "Supervises both sales and project management and supports the Brain in putting the strategy together."
        },
        {
          title: "The Shark",
          description:
            "Supports the Chief in strategic decisions and investor relations."
        },
        {
          title: "The Brain",
          description:
            "Responsible for creating the marketing and PR strategy and supervising content."
        },
        {
          title: "The Dealmaker",
          description:
            "Hunts for new leads and brings in new deals. His work is done, when a deal is closed."
        },
        {
          title: "The Hammer",
          description:
            "The project management lead for any deal. His work is done when the ICO is successful and the client is exuberant."
        },
        {
          title: "The MC",
          description:
            "The company’s information hub, sales associate, project coordinator and administrator."
        },
        {
          title: "The Treasurer",
          description:
            "Holds the key to all our secrets as chief administrator of the software we use, supervises website development and is responsible for email lists."
        },
        {
          title: "The Wordsmith",
          description:
            "Creates all our amazing text content for both print, web and social."
        }
      ]
    };
  },
  components: {
    Testimonials,
    ContactSection,
    LinkSection,
    FooterSection
  }
}
</script>


<style lang="scss">
@import "../assets/scss/abstracts/variables";
.section--head {
  padding: 7rem 0 17rem;
  min-height: 770px;
  background: $dark-gray 50% 50% no-repeat url("../assets/img/head-bg.png");
  background-size: cover;
}
</style>
