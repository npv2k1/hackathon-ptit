git reset --mixed
git stash --include-untracked
git reset --hard deploy/web
git pull https://$GIT_TOKEN@github.com/npv2k1/nnews deploy/web --allow-unrelated-histories
cp .env.example .env.production
yarn
pm2 reload webnnews