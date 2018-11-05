<template>
  <div id="app">

    <header class="section">
      <div class="container">
        <h1>
          Guaranteed token sale success for ICO founders
        </h1>
        <div>
          We’ll get you there, hassle-free!
        </div>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <h1>What we do</h1>
        <h2>
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
    </section>

    <section class="section">
      <div class="container">
        <div>
          Our content marketing strategy will tell your audience how awesome 
          your product or service is, and tell them how they can be part of that
           awesomeness. It will convert interest into sales, and prospects into 
           long-term loyal customers.

          <a href="">Read the specifics of our go-to-market product</a>

          <a href="">Contact us now</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <testimonials />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1>About US</h1>
        <h2>A few words about who we are</h2>
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
    </section>
    
    <link-section />

    <section class="section">
      <div class="container">
        <h1>Team</h1>
        <h2>Meet The Team</h2>
        <h3>Our world class experts will guide your great idea to a knockout token sale!</h3>


      </div>
    </section>

    <article id="contact" class="section section--gray">
      <contact-section />
    </article>
    <footer-section />
  </div>
</template>

<script>

import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'
import LinkSection from '@/components/LinkSection'
import FooterSection from '@/components/FooterSection'

export default {
  name: 'app',
  components: {
    Testimonials,
    ContactSection,
    LinkSection,
    FooterSection
  }
}
</script>

<style lang="scss">
@import "./assets/scss/app";

a:hover {
  background: $yellow;
}

body {
  overflow-x: hidden;
}
.section {
  position: relative;
  padding-top: 4rem;
  padding-bottom: $section-spacing;

  .fingerprint {
    position: absolute;
    z-index: 0;
  }
}

.section__title {
  font-size: 1rem;
  font-weight: 300;
  color: $gray;
  font-family: $font-family-base;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.section__sub-title {
  font-family: $font-family-base;
  font-size: 1rem;
  margin: 1.5rem 0;
  @include media-breakpoint-up(md) {
    font-size: 1.25rem;
  }
  @include media-breakpoint-up(lg) {
    font-size: 1.5rem;
  }
}
.section__lead {
  font-size: 2.5rem;
  margin: 1.5rem 0;

  @include media-breakpoint-up(md) {
    font-size: 3rem;
  }
  @include media-breakpoint-up(lg) {
    font-size: 3.5rem;
  }
}
.section__sub-lead {
  font-size: 1rem;
  margin: 2rem 0;
  @include media-breakpoint-up(md) {
    font-size: 1.25rem;
  }
  @include media-breakpoint-up(lg) {
    font-size: 1.5rem;
  }
}

.section--gray {
  background: $light-gray;
}

.shaded {
  box-shadow: 20px 20px 0 rgba(0, 0 , 0, .05)
}
.inline-link {
  display: inline-block;
  font-weight: bold;
  padding-left: 3px;
  padding-right: 3px;
  margin-left: -3px;
  margin-right: -3px;
}

.copyright {
  background: $dark-green;
  padding: 1.5rem 0;
}

.fade {
  will-change: opacity;
}

.nav-link {
  &:hover {
    background: transparent;
  }
}
.contact-btn-position {
  position:relative;
  top: $section-spacing + $input-btn-padding-y + 0.615rem;
}

.btn {
  text-transform: uppercase;
}

.btn-primary,
.btn-light {
  transition: background-color .3s, color .3s;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid $primary;
    z-index: -1;
    border-radius: inherit;
    transform: scale3d(0.6, 0.6, 1);
    transition: transform 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }

  &:hover {
    background-color: #fff;
    color: $primary;

    &:before {
      transform: scale3d(1, 1, 1);
      opacity: 1;
    }
  }
}
.btn-light {
  &:before {
    border-color: #fff;
  }
  &:hover {
    background-color: $primary;
    color: #fff;
  }
}

</style>