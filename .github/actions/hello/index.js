const core = require('@actions/core@v1');
const github = require('@actions/github@v1');

try{
    // throw(new Error("some error message"));
    // core.debug('debug message') # displays when ACTIONS_STEP_DEBUG is true
    const name = core.getInput('who-to-greet');
    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString);

} catch (error){
    core.setFailed('action failed');
}