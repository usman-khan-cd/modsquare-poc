# ModSquare POC
## Installation Setup.
<p>No Configuration is required as the project without any configuration can be executed in docker envrioment. Only dependencies in this case is Docker and docker-compose. We have tested this setup on Docker Community Edition Version 2.0.0.3 (31259). Please note that docker and docker-compose setup instructions are not part of this project. More can be found on below links.</p>

<a href="https://www.docker.com/">Docker</a> <br />
<a href="https://docs.docker.com/compose/">Docker Compose</a>


Simply run this command, and wait till it pull required images from docker hub and build images. <br />
<code>docker-compose up --build -d</code>

Once the command is executed successfully, app can be accessed 
you can open <a href="http://localhost">http://localhost/</a>

## Important
<ol>
<li>Please make sure nothing is running on port 80 and 27017 as docker setup requries these ports.</li>
<li>Apart from asked POC functionality, we have used our standard practices and they are very equally important. You can think modsquare-react-app as overkill but our idea here is to show our skills.</li>
</ol>

## Folder Overview
<ol>
  <li>modsquare-react-app - FrontEnd
    <ul>
      <li>Material UI</li>
      <li>Style components</li>
      <li>ESLint Integration</li>
      <li>ES6 is used</li>
      <li>Immultable JS</li>
      <li>Redux Saga</li>
      <li>Webpack Code Splitting</li>
      <li>Loadabel Components</li>
      <li>Project structure supports i18n feature but we hav't implemented it.</li>
    </ul>
  </li>
  <li>modsquare-server-app - NodeJs
    <ul>
      <li>ExpressJS Framework-</li>
      <li>Dependency Injection using awilix-express </li>
      <li>MognoDB NoSQL</li>
      <li>Based Multi Layered Architecture.</li>
      <li>Business Layer as services.</li>
      <li>DTO concept is used to expose which attributes needs to be exposed over RESTFUL API based on mapper pattern.</li>
      <li>Losely coupled</li>
    </ul>
  </li>
</ol>