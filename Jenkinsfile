#!groovy

pipeline {
    agent any 
    stages {
        stage('CheckOutGit') {
            steps {
            echo "cloning the openkart project Repo form GitHub to container"
            checkout scm
            echo "Successfully clones the openkart project from our GitHub Repo"
            sh "ls -lrth"
            }
        }
        
        stage('Docker Setup') {
            steps {
                script {
                    echo "Setting Up Docker...."
                    def dockerHome = tool 'MyDocker'
                    echo "${dockerHome}"
                    env.PATH = "${dockerHome}/bin:${env.PATH}"
                    echo "Docker setup has done"
                    sh "docker --version"
                    sh "whoami"
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