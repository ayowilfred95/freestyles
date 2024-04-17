Goals:
1. Deploy Container

2. Enable Connectivity

3. External Access


steps:
1. Deploy PODs

2. Create Services(ClusterIP)

    1. Redis
    2. db

3. Create Services(NodePort)
    1. Voting-app
    2. Result-app


Voting APP -> Redis -> Worker -> postgres -> result app
