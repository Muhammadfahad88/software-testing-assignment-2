import {render,screen} from '@testing-library/react'
import React from 'react';
import { Button } from 'selenium-webdriver';
import Login from '../Login.js';
import Signup from '../Signup.js';
import Editprofile from '../EditProfile.js';



test('renders Edit Profile',()=>{
    render(Editprofile);
    
})

test('renders Email input in Edit profile',()=>{
    render(<Editprofile/>);
    const nameinput=screen.getByPlaceholderText('Your name');
    expect(nameinput).toBeInTheDocument();
})

test('renders Password input in Edit profile',()=>{
    render(<Editprofile/>);
    const emailinput=screen.getByPlaceholderText('Email');
    expect(emailinput).toBeInTheDocument();
})

test('renders Save Button in Edit profile',()=>{
    render(<Editprofile/>);
    const btninput=screen.getByRole(Button);
    expect(btninput).toBeInTheDocument();
})


test('renders Signup',()=>{
    render(<Signup/>);
    
})

test('renders Email input in signup',()=>{
    render(<Signup/>);
    const nameinput=screen.getByPlaceholderText('Your');
    expect(nameinput).toBeInTheDocument();
})

test('renders Password input in signup',()=>{
    render(<Signup/>);
    const emailinput=screen.getByPlaceholderText('Email');
    expect(emailinput).toBeInTheDocument();
})

test('renders Signup Button in signup',()=>{
    render(<Signup/>);
    const btninput=screen.getByRole(Button);
    expect(btninput).toBeInTheDocument();
})

test('renders Login',()=>{
    render(Login);
    
})

test('renders Email input',()=>{
    render(<Login/>);
    const userinput=screen.getByPlaceholderText('Email');
    expect(userinput).toBeInTheDocument();
})

test('renders Password input',()=>{
    render(<Login/>);
    const passinput=screen.getByPlaceholderText('pass');
    expect(passinput).toBeInTheDocument();
})

test('renders Login Button in login page',()=>{
    render(<Login/>);
    const btninput=screen.getByRole(Button);
    expect(btninput).toBeInTheDocument();
})
