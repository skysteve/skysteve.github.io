// import { PDFViewer } from "@react-pdf/renderer";
// import { ResumeDocument } from "./ResumeDocument";
import "./resume.css";
import { Grid } from "@mui/material";

export function PageResume() {
  return (
    <>
      {/* <Paper elevation={1}> */}
      {/* <PDFViewer className="pdf-viewer" showToolbar={false}>
          <ResumeDocument />
        </PDFViewer> */}

      <div className="cv">
        <Grid container spacing={1}>
          <Grid className="personals pull-right">
            <ul>
              <li>Steve Jenkins</li>
              <li>Email: resume@skysteve.com</li>
              <li>DOB: 1990-02-14</li>
              <li>Nationality: Canadian</li>
            </ul>
          </Grid>

          <Grid className="intro" xs={12}>
            <p>
              I'm a highly motivated, pro-active web developer & engineering
              manager specializing in large web applications. With 10+ years
              post university experience in fast paced start up companies in the
              UK and Canada. Currently living Squamish, BC, Canada as a citizen.
            </p>
          </Grid>
        </Grid>

        <Grid className="skills" container spacing={1}>
          <Grid xs={12}>
            <h2>Areas of expertise/Skills</h2>
          </Grid>
          <Grid xs={12} md={4}>
            <h4>Frontend</h4>
            <ul>
              <li>TypeScript</li>
              <li>Javascript</li>
              <li>ES2015/ES2016 (ES6+)</li>
              <li>React/Redux</li>
              <li>Angular</li>
              <ul>
                <li>Object Orientated</li>
                <li>Jasmine/mocha/chai unit tests</li>
                <li>Service Workers</li>
              </ul>
              <li>CSS(3) (inc responsive)</li>
              <li>HTML(5)</li>
              <li>
                Web components
                <small>(Native & React)</small>
              </li>
            </ul>
          </Grid>

          <Grid xs={12} md={4}>
            <h4>Backend</h4>
            <ul>
              <li>Node.js</li>
              <li>NextJS</li>
              <li>AWS</li>
              <li>AWS CDK/Cloudformation</li>
              <li>Docker</li>
              <li>Redis</li>
              <li>Mongodb</li>
              <li>Express JS</li>
              {/* <!-- <li>Java EE</li>
        <li>Java 8</li>
        <li>Apache/NGINX</li>         --> */}
              <li>PostgreSQL</li>
              <li>Rabbit MQ</li>
              <li>Github Actions/Circle CI</li>
              {/* <!-- <li>C# .net</li> --> */}
            </ul>
          </Grid>

          <Grid xs={12} md={4}>
            <h4>General</h4>
            <ul>
              <li>Team Leadership</li>
              <li>Mentoring & career development</li>
              <li>Product brief creation</li>
              <li>Technical Design documentation</li>
              <li>Scoping and ticket breakdown</li>
              <li>Scrum/Agile/Scrum master</li>
              <li>Analytical evaluation</li>
              <li>Continuous deployment (CI/CD)</li>
              {/* <!-- <li>Microservices</li> -->
        <!-- <li>MVC architecture</li> --> */}
              <li>Build Systems (Webpack, rollup)</li>
              {/* <!-- <li>Testing</li> -->
        <!-- <li>Linux</li> --> */}
              <li>Problem solving</li>
            </ul>
          </Grid>
        </Grid>
        {/* <!-- end columns --> */}
        <br className="hide-print" />
        <h2>Experience</h2>
        <article className="experience">
          <div className="job">
            <h5>
              Durable
              <small>October 2023 - February 2024</small>
            </h5>
            <ul>
              <li>Technical lead/software engineer</li>
              <li>
                Primarily responsible for the CRM Module including a rebuild of
                the old code
              </li>
              <li>
                Implemented internationalization across the website builder
                including laying foundations for further development
              </li>
              <li>Built new website blocks for the website builder</li>
              <li>
                Added additional functionality to existing modules including
                migrations to new data structures
              </li>
              <li>Helped to guide and implement a new sprint process</li>
              <li>
                Worked closely with customer service to address issues as well
                as identify themes and escalate these with solutions/plans
              </li>
              <li>
                Investigated, scoped and developed a proof of concept for
                scheduling
              </li>
            </ul>
            <div className="tech-used">
              <h6>Technology used</h6>
              <ul>
                <li>React</li>
                <li>NextJS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
          <div className="job page-break">
            <h5>
              Tile/Life360 (Originally Tile, Acquired by Life360)
              <small>September 2020 - September 2023</small>
            </h5>
            <ul>
              <li>
                Team Lead/manager for a team of at most 13 developers across
                tile.com and life360.com
              </li>
              <li>
                Work with HR and management to best support the team during an
                acquisition of Tile by Life360
              </li>
              <li>
                Management responsibilities include 1-1s with team, performance
                reviews and career development
              </li>
              <li>
                Managing the team through company layoffs including loosing team
                members and key stakeholders
              </li>
              <li>
                Tech lead for tile.com replatform from initial platform
                selection to site live including site architecture (e-commerce
                site)
              </li>
              <li>
                AWS infrastructure as code (CDK) for new platform infrastructure
              </li>
              <li>
                Launched replatform with no downtime and phased rollout across
                multiple locales and domains
              </li>
              <li>
                Communicating with stakeholders and design to refine
                requirements
              </li>
              <li>
                Scum master: Run sprint ceremony meetings (standups, planning,
                retrospectives, grooming)
              </li>
              <li>
                Help coach members of the team and provide opportunities for
                them to challenge themselves and learn
              </li>
              <li>
                Setup and maintain monitoring and alerting for critical systems
                as well as participate in on-call rotor
              </li>
              <li>
                Spoken at an in-person conference about Tile.com's replatform
              </li>
              <li></li>
            </ul>
            <div className="tech-used">
              <h6>Technology used</h6>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>
                  AWS (CDK, ECS, SQS, S3, EC2, Lambda, DynaomDB, CloudFormation,
                  CloudFront)
                </li>
                <li>Cloudflare</li>
                <li>Github Actions (CI/CD)</li>
                <li>Netlify</li>
                <li>BigCommerce</li>
              </ul>
            </div>
          </div>
          <div className="job">
            <h5>
              JungleScout
              <small>October 2018 - August 2020</small>
            </h5>
            <ul>
              <li>Team Lead for a team of 4 developers</li>
              <li>
                Management responsibilities include 1-1s with team, performance
                reviews and career development
              </li>
              <li>
                Product road mapping with product manager and design review
                meetings with PM & designers
              </li>
              <li>
                Frontend specialist including knowledge sharing and mentoring
                all things Frontend
              </li>
              <li>
                Implemented various new features and updates to existing
                features in React
              </li>
              <li>
                Architected and implemented websockets to provide live updates
              </li>
              <li>
                Helped to migrate a legacy application into our main codebase
                and support the maintenance
              </li>
              <li>
                Instrumental in identifying tech debt and working with
                management and other teams to address it
              </li>
              <li>
                Lead a standards and testing tribe across teams to drive
                forwards our standards
              </li>
              <li>
                Updated our build process to enable code splitting and worked
                hard to reduce our bundle size
              </li>
              <li>
                Rebuilt our alert emails to be mobile friendly and work across
                email platforms
              </li>
              <li>
                Responsible for redesigning and delivering our developer
                onboarding sessions for new hires
              </li>
              <li>
                Working with CI and AWS to improve our build and deployment
                processes
              </li>
              <li></li>
            </ul>
            <div className="tech-used">
              <h6>Technology used</h6>
              <ul>
                <li>React/Redux</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>
                  AWS (ECS, SQS, S3, EC2, Lambda, DynaomDB, CloudFormation,
                  CloudFront)
                </li>
                <li>Docker</li>
                <li>CircleCI</li>
                <li>Websockets</li>
                <li>Ruby/Rails</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
          <div className="job">
            <h5>
              SaleCycle
              <small>March 2016 - September 2018</small>
            </h5>
            <ul>
              <li>
                Helped to develop new data scraping script (written in
                TypeScript) for clients (support down to IE10)
              </li>
              <li>
                Developed a new testing system for the above script using
                Puppeteer and Cucumber, and a build system to push scripts to S3
              </li>
              <li>
                Helped to develop large, scaleable backend systems to process
                incoming data
              </li>
              <li>
                Developed docker based microservices for multiple project with
                automated tests and continuous delivery
              </li>
              <li>Converted core JavaScript over to TypeScript</li>
              <li>
                Helped to develop and manage AWS services including using AWS
                CloudFormation
              </li>
              <li>
                Lead a project to replace an old legacy email compilation system
                with a new microservices solution utilizing ECS and SQS
              </li>
              <li>Working as part of a cross continent team</li>
              <li>
                Helping to train and develop other employees including in remote
                offices
              </li>
              <li>Training an outsourced team in Belarus</li>
              <li>
                Mentoring junior members of the team and assisting other teams
              </li>
            </ul>
            <div className="tech-used">
              <h6>Technology used</h6>
              <ul>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>
                  AWS (ECS, SQS, S3, EC2, Lambda, DynaomDB, CloudFormation,
                  CloudFront)
                </li>
                <li>Docker</li>
                <li>React JS</li>
                <li>CircleCI</li>
                <li>Websockets</li>
                <li>mocha</li>
                <li>Puppeteer</li>
              </ul>
            </div>
          </div>

          <div className="job">
            <h5>
              Spontly
              <small>October 2014 - March 2016</small>
            </h5>
            <ul>
              <li>
                Architected and built an internal social media management tool
                to automate posts to facebook and twitter
              </li>
              <li>
                Implemented vagrant boxes for most of the development and live
                environments
              </li>
              <li>
                Implemented continuous integration build systems (including
                deployment)
              </li>
              <li>
                Archeticted a web app version of existing android and ios apps
                using node JS and marionette
              </li>
              <li>
                Developing and managing backend systems to generate data and
                process queues
              </li>
              <li>
                Architected and developed most of a football based gambling game
              </li>
              <li>Helping to mentor and manage interns</li>
            </ul>
            <div className="tech-used">
              <h6>Technology used</h6>
              <ul>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>AWS (SQS, S3, EC2)</li>
                <li>MongoDB</li>
                <li>Backbone.js</li>
                <li>Marionette.js</li>
                <li>Vagrant</li>
                <li>Code ship</li>
              </ul>
            </div>
          </div>

          <div className="job">
            <h5>
              CANDDi
              <small>2012 - August 2014</small>
            </h5>
            <ul>
              <li>
                Scrum master for a team of up to 4 running daily meetings,
                planning meetings, retrospectives and ensuring processes were
                followed
              </li>
              <li>
                Responsible for embedded tracking JavaScript which records user
                actions and must be cross browser compliant (including IE6)
              </li>
              <li>
                Created most of the node.js projects responsible for collecting
                inbound data, pushing live updated to users and the majority of
                our outbound email communications
              </li>
              <li>
                Implemented most of the current CANDDi dashboard in Backbone.js
                and Marionette.js along with mustache templates
              </li>
              <li>
                Developing and maintaining large sections of the canddi.com
                public website using jekyll and implementing Grunt.js to build
                the site to enable extra features
              </li>
              <li>
                Managing time between planned sprint work and maintenance (bug
                fixes) work
              </li>
              <li>
                Responsible for designing and scoping some large technical
                challenges such as implementing new features as well as taking
                part in group planning sessions when required
              </li>
            </ul>
            <div className="tech-used">
              <h6>Technology used</h6>
              <ul>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>AWS (SQS, S3, EC2)</li>
                <li>MongoDB</li>
                <li>Backbone.js</li>
                <li>Marionette.js</li>
                <li>RabbitMQ</li>
              </ul>
            </div>
          </div>

          <div className="job">
            <h5>
              Hewlett Packard
              <small>(intern) 2010 - 2011</small>
            </h5>
            <ul>
              <li>
                Internship between 2nd and 3rd year at university as part of the
                deduplication team in the disk to disk backup storage business
              </li>
              <li>
                Largely a supporting role within the team although I did mange
                to implement some bug fixes in live code during my time
              </li>
              <li>
                Responsible for setting up and managing a suite of test servers,
                code quality systems, performance testing, unit tests
              </li>
              <li>
                Participated in agile (scrum) activities within a large team
                including planning and stand-up meetings
              </li>
              {/* <!-- <li>Also participated in giving presentations, helping out within other teams and reviewing CVs and partaking in interviews
          for my replacement</li> --> */}
            </ul>
          </div>

          <div className="job">
            <h5>
              Manx Electricity Authority
              <small>(Vacation work) between 2008 - 2010</small>
            </h5>
            <ul>
              <li>
                General IT support and VB scripts to aid with monitoring and
                debugging
              </li>
            </ul>
          </div>

          <hr />
          <div className="education">
            <h2>Education</h2>
            <h5>
              Newcastle University
              <small>2008 - 2012</small>
            </h5>
            <p>
              BSc (Hons) Computing Science with Industrial Placement
              <b>1st Class honours</b>
            </p>

            <h5>
              Castle Rushen High School
              <small>2001 - 2008</small>
            </h5>
            <p>
              A Levels: Computing, Physics, Chemistry, General Studies
              <br />
              GCSEs:
              <b>2As, 8Bs, 2Cs</b>
            </p>
          </div>

          <hr />
          <br />
          <h2>Transferable skills</h2>
          <ul>
            <li>
              Skilled in communicating technical concepts to non-technical
              people
            </li>
            <li>
              Experience working with product and design teams to help refine
              ideas and scope projects
            </li>
            <li>
              Working within both small and large teams as well as within a
              wider organization
            </li>
            <li>Ability to adapt to new environments and systems</li>
            <li>
              Ability to learn new programming languages and styles of working
            </li>
            <li>
              Experience working within a distributed team and working remotely
              including across time zones
            </li>
            <li>
              Experience mentoring junior team members and less technical
              members of staff
            </li>
            <li>Strong foundation/background in Vanilla JavaScript inc ES6+</li>
          </ul>

          <br />
          <h2>Additional skills</h2>
          <ul>
            <li>Full, clean diving license (since age 16)</li>
            <li>Paragliding pilot license and former coach</li>
          </ul>
          <br />

          <h2 id="headPersonal">Personal Interests</h2>
          <p id="pPersonal">
            Paragliding, Kite surfing, Mountain Biking, Snowboarding, Rock
            Climbing, Skiing, Skydiving.
          </p>

          <div className="hide-print">
            <br />
            <a href="mailto:resume@skysteve.com">resume@skysteve.com</a>
            <br />
            <br />
          </div>
        </article>
      </div>
      {/* </Paper> */}
    </>
  );
}
