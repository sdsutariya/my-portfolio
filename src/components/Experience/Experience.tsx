import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Experience() {
  return (
    <Container id="experience">
      <h2>My Experience</h2>
      <div className="experiences">

        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="experience-links">
                <a href="https://ethicalswag.chantsit.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Ethical Swag</h3>
              <p> Developed an automated order management system using React, Node.js, Express.js, and MongoDB, streamlining the order process from customer placement to delivery. Integrated automation tools like Node Cron to handle estimate generation, invoicing, billing, and delivery tracking, providing an efficient and user-friendly platform for managing customer orders, supplier estimates, and order fulfillment. </p>
            </div>
            <footer> <ul className="tech-list"> <li>AWS EC2</li><li>Deployment</li><li>Node</li> <li>Mongodb</li> <li>React</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="experience-links">
                <a href="https://foodbyte.io" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>FoodByte - Digital Food Safety Solution</h3>
              <p>
                Developed FoodByte, a comprehensive platform for food manufacturers to streamline food safety and compliance processes. Leveraged technologies like Node.js, React.js, and Postgres to create a solution that tracks food processing, ensures compliance with industry standards (SQF, BRC, FSMA, HACCP, Canada/GlobalGAP), and automates auditing. Key features include real-time monitoring, traceability, deviation handling, and reporting tools, resulting in significant cost savings and operational efficiency for clients.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node</li>
                <li>React</li>
                <li>Postgres</li>
                <li>pm2</li>
                <li>Node mailer</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="experience-links">
                <a href="https://ckc.chantsit.com/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site CKC-TopDogs" />
                </a>
                <a href="https://events.ckc.ca/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site CKC- Event Management" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CKC</h3>
              <p>
                The CKC Dog Competition Results System is a web application developed for the Canadian Kennel Club (CKC), the national non-profit organization that manages the registry of purebred dogs in Canada. This system is designed to manage and display dog competition results, automate certificate generation, and provide visual insights into annual competition statistics.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node</li>
                <li>React</li>
                <li>Postgres</li>
                <li>Puppter</li>
                <li>Amcharts</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="experience-links">
                <a href="https://www.alura.io/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Alura - Powerful Tools for Etsy Sellers</h3>
              <p>The Etsy Seller Tools project is a suite of tools designed to help Etsy shop owners grow their businesses by optimizing their product listings, analyzing their shops, and researching keywords and products so they will rank well on etsy and get higher sell.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Etsy API</li>
                <li>Google Ads API</li>
                <li>OpenAI API</li>
                <li>Postgres</li>
                <li>Node</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="experience-links">
                <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Ava - Your Personal AI Writing Assistant</h3>
              <p>Ava is a cutting-edge AI-powered writing assistant designed to help you create high-quality content in seconds. It leverages ChatGPT in the backend to generate well-crafted drafts, saving you time and effort on writing tasks. Whether you're crafting emails, blog posts, social media captions, or marketing materials, Ava’s advanced algorithms help you create content that’s both engaging and effective.
              </p><p>
                With over 100+ customizable templates, Ava is built for professionals in industries like marketing, sales, human resources, and content creation. Ava adapts to your needs, making it easier to produce content across a variety of use cases, such as cold emails, SEO-optimized articles, product descriptions, and more.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>OpenAI API</li>
                <li>Postgres</li>
                <li>Node</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="experience-links">
                <a href="https://velocityai.vinayaksingh.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>BikeFolder</h3>
              <p>
              BikeFolder is a cutting-edge software solution built from the ground up with disruptive backend technologies. It offers a comprehensive suite of features that simplify bike ownership, such as selling bikes, changing ownership, managing insurance leads, service notifications, and more. Whether you're a bike enthusiast or a dealership, BikeFolder streamlines bike management and ensures maximum value retention for your bike.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node</li>
                <li>Typescript</li>
                <li>Nest</li>
                <li>Firebase</li>
                <li>Cron</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}