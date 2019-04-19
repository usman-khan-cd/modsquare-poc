# ModSquare POC
## Installation Setup.
<p>No Configuration is required as the project without any configuration can be executed in docker envrioment. Only dependencies in this case is Docker and docker-compose. We have tested this setup on Docker Community Edition Version 2.0.0.3 (31259). Please note that docker and docker-compose setup instructions are not part of this project.</p>

<a href="https://www.docker.com/">Docker</a>
<a href="https://docs.docker.com/compose/">Docker Compose</a>


Simply run this command, and wait till it pull required images from dockerhun and build images. <br />
<code>docker-compose up --build -d</code>

Once the command is executed successfully, app can be accessed 
you can open <a href="http://localhost">http://localhost/</a>

## Important
<ol>
<li>Please make sure nothing is running on port 80 and 27017 as docker setup requries these ports.</li>
<li>data-dir folder </li>
</ol>
## Docker Setup Overview
