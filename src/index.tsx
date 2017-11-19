import * as React from 'react';
import { render } from 'react-dom';

const Hello: React.SFC<{}> = () => <h1>Hello, Yevhenii!</h1>;

render(<Hello />, document.getElementById('app'));
