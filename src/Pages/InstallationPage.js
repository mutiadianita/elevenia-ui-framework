import React, { Component } from 'react';

class InstallationPage extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Installation</h1>
                <h1>Add elevenia-ui to your project</h1>
                <p>Open command prompt or terminal, run command:</p>
                <code>
                    $ cd your_project_path <br />
                    $ yarn add https://github.com/mutiadianita/elevenia-ui-framework.git#build <br />
                    # or
                    $ npm install https://github.com/mutiadianita/elevenia-ui-framework.git#build <br />
                </code>

                <h1>Development mode</h1>
                <p>Install the dependencies and devDependencies and start the server.</p>
                <code>
                    $ git clone https://github.com/elevenia/master-ui.git && cd master-ui <br />
                    $ yarn install <br />
                    $ yarn start
                </code>

                <h1>How to Build</h1>
                <code>
                    $ cd elevenia-ui_folder <br /><br />

                    # only first clone <br />
                    $ git clone https://github.com/elevenia/master-ui.git#build <br /><br />

                    $ yarn build <br />
                    $ cd build <br />
                    $ git add . <br />
                    $ git commit -m 'commit_message_build' <br />
                    $ git push origin build <br />
                </code>

                <h1>How to Publish to npm registry</h1>
                <p>1. Login into npm using elevenia account</p>
                <code>
                    $ npm login <br />
                    # username: mutiadianita <br />
                    # password: MutiaElevenia11 <br/>
                    # email: mutiaayu.dianita@gmail.com
                </code>
                <p>2. Update master-ui version manually on package.json</p>
                <p>3. Run release script</p>
                <code>
                    $ npm run release
                </code>
            </div>
        );
    }
}

export default InstallationPage;