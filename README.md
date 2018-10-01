# C++ Alliance


## Run Development Environment:
1. Install Jekyll - `gem install jekyll bundler`
2. Start engine - `jekyll serve --watch`


## To Create A Post:
1. Create a new file in `_posts` directory
2. Name it in this format: year-month-day-Name-of-post.md
3. Include front matter 
```
    ---
    layout: post
    nav-class: dark
    title: post title
    categories: post category
    description: 'description for og tags'
    hero-image: 'image link'
    ---
```

## Deployment:
We use CircleCI as a build service to trigger custom plugins. (Best of all, it is free for GitHub pages!) We have already created the build instruction, but you must sign in and enable the project inside of CircleCI to begin building and deploying your website. You can find that documentation here: https://circleci.com/docs/2.0/first-steps/

Your website can be created using a gitflow where the master branch is the generated, minified content from CircleCI. We recommend one branch (i.e. develop) be reserved for original work and set as the default for the repository.

###Updating your website

####Clone the repository
git clone https://github.com/someuser/somerepo.git

`cd somerepo`

Create a new branch for your work
`git checkout -b new-changes`

Commit your changes and push to github
```
git add .
git commit -m "description of changes"
git push -u origin new-changes
```

Create a Pull Request and merge your work into the develop branch.
CircleCI will then pull down the develop branch, generate the pages, minify code, and push it to the master branch.
