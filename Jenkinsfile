#!groovy

pipeline {
    agent any 
    stages {
        stage('CheckOut GitHUb Repo') {
            steps {
            echo "cloning the openkart project Repo form GitHub to container"
            checkout scm
            echo "Successfully clones the openkart project from our GitHub Repo"
            sh "ls -lrth"   // Lists all the file in GitHub Repo 
            }
        }

        stage('Docker Setup') {
            steps {
                script {
                    echo "Setting Up Docker...."
                    //uses the `tool` step to retrieve the Docker tool installation named 'MyDocker.' 
                    // assumes that we have configured, a Docker tool installation in the Jenkins global tool configuration with the name 'MyDocker.'
                    def dockerHome = tool 'MyDocker'     // We can see at console logs of pipeline(i.e.,  openkart_build_openkart in localhost:8080),
                                                            //            ``````|`````
                                                            //   `Downloading Docker client latest` 
                                                            //   `Unpacking https://get.docker.com/builds/Linux/x86_64/doccker-latest.tgz   to   /var/jenkins_home/..../MyDocker`                               
                    echo "${dockerHome}"    //Prints the path to the Docker tool installation.
                    // OUTPUT:  /var/jenkins_home/tools/org.jenkinsci.plugins.docker.commons.tools.DockerTool/MyDocker
                    sh "ls ${dockerHome}"
                    echo "${env.PATH}"
                    // OUTPUT: /opt/java/openjdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

                    // `env` is a special variable in Jenkins that represents the environment variables for the current pipeline execution. 
                    // `PATH` is the specific environment variable we want to update.
                    //  update the `PATH` variable in Jenkins container to include the directory where the Docker executable is located.
                    env.PATH = "${dockerHome}/bin:${env.PATH}"  // include the Docker executable path to `env.PATH`
                                                                // `dockerHome}/bin` ----- path to the directory where the Docker executable is expected to be found.
                                                                // `dockerHome` represents the Docker installation directory
                                                                // `bin` is the subdirectory where the Docker executable resides.
                                                                //`${env.PATH}`  appends the existing PATH value to the new Docker executable path.
                                                                //The colon (:) separates different directories in the PATH variable.
                    echo "${env.PATH}"
                    /* OUTPUT: /var/jenkins_home/tools/org.jenkinsci.plugins.docker.commons.tools.DockerTool/MyDocker
                                                            /bin:/opt/java/openjdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin        */
                    echo "Docker setup has done"        
                    sh "docker --version"       //Comamnd returns ---- Docker version 17.05.0-ce, build 89658be
                    sh "whoami"     // Command returns --- jenkins
                }
            }
        }

        stage('Building Docker Image') {
            steps {
                script {
                    // Telling jenkins to Build Docker image in our DockerHub Account with provided name
                    def customImage = docker.build("indraja12345docker/openkart_jenkins:${env.BUILD_ID}")
                                                         // `env.BUILD_ID` has the latest Build number that generated whenever we did `Build Now` on jenkins pipeline
                    echo "Pushing image to our DockerHub Account"
                    withCredentials([usernamePassword(credentialsId: 'JenkinsDocker', usernameVariable: 'JenkinsDockerUsername' passwordVariable: 'JenkinsDockerPassword')])
                    {
                        sh "docker login -u ${env.JenkinsDockerUsername} -p ${env.JenkinsDockerPassword}"
                        sh "docker push indraja12345docker/openkart_jenkins:${env.BUILD_ID}"

                    }
                }
            }
        }
    }
}

// NOTE:
//     The `checkout scm` fetches  the source code from your GitHub repository and places it in the Jenkins workspace.
//              The Jenkins workspace is a directory on the Jenkins agent where the pipeline is executed.
//              When you run the Jenkins job, Jenkins automatically creates a workspace for that job on the agent.
//                  For example, if your GitHub repository is named "my-angular-project," 
//                              the code will be checked out to a directory called "my-angular-project" within the Jenkins workspace.
//----------------------------
// Stages: Represent distinct phases or steps in your pipeline.
//             stage('Docker Setup'): This defines a stage in the Jenkins pipeline called "Docker Setup." 

// steps: This block contains the steps to be executed within the stage.

// script: This block allows you to run arbitrary Groovy code within the pipeline. It's useful for more complex logic or dynamic behavior

//The PATH is an environment variable that contains a list of directories. 
            //When you run a command in the terminal or in a pipeline, 
            //                      the system searches for the command executable file within the directories listed in the PATH variable.