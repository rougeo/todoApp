pipeline {
    agent none
    
    stages {
        
        stage('Build') {
            agent { 
                    docker {
                        image 'node'
                        label 'ubuntu'
                    } 
                }
            steps {
                checkout scm
                sh  """
                    yarn 
                    yarn build
                    """
            }
        }
        stage('Deploy') {
            agent { 
                    node {
                        label 'ubuntu'
                    }
                }
            steps {
                sh  """
                    docker build  -t todomarket:1.0.0 .
                    docker rm -f todomarketReact ||  true
                    
                    docker run -dit  --name todomarketReact -p 8069:80 --env "VIRTUAL_HOST=todomarket.guineeservice.com"  todomarket:1.0.0
                    
                    """
            }
        }
    }
}