# meteor-svelte-gantt
Example usage for gantt component made with Svelte in a Meteor + Blaze App

This example uses Gantt component: https://github.com/ANovokmet/svelte-gantt

### Steps to reproduce:
- Create meteor app:
  - meteor create --blaze meteor-svelte-gantt --prototype
  - cd meteor-svelte-gantt/
- Install https://github.com/meteor-svelte/blaze-integration: 
  - meteor add svelte:blaze-integration
- Install Svelte in Meteor:
  - meteor add svelte:compiler
  - meteor npm install --save svelte@3.46.4
- Install Gantt https://github.com/ANovokmet/svelte-gantt dependencies:
  - npm install svelte-gantt
  - meteor npm install --save svelte-routing
  - meteor npm install --save moment
- Run Meteor:
  - meteor
