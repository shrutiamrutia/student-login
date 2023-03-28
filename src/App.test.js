import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});





/* input[type=text] {
  box-sizing: border-box;
  display: block;
  width: 20%;
  margin: 20px 0;
  min-width: 250px;
color: #fff;
font-size: 14px;
padding: 10px 15px;
text-decoration: none;
background: #fff;
}

.button {
  background-color: #07c;
  color: white;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  min-width: 250px;
  width: 20%;
  margin: 20px 0;

}


* {box-sizing: border-box}


.container {
  padding: 16px;
  align-items: center;  
}

.right-box a{
  display: block;
  width: 20%;
  margin: 20px 0;
  min-width: 250px;
color: #fff;
font-size: 16px;
padding: 15px 30px;
text-decoration: none;
background: rgb(198, 51, 51);
}


a:hover{
  color: darkblue;
}

.link{
  margin-right: 10px;
} */
