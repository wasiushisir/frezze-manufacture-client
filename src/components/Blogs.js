import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h4 className='text-primary text-2xl font-bold my-3'>1.How will you improve the performance of a React Application?

                </h4>


                <ol>
                    <li>1.Use Production Build</li>
                    <li>2.Use React.Suspense and React.Lazy for Lazy Loading Components</li>
                    <li>3.Use React.memo for Component Memoization</li>
                    <li>4.Virtualize a Large List Using react-window</li>
                    <li>5.Wrapping up</li>
                </ol>
            </div>



            <div>
                <h4 className='text-primary text-2xl font-bold my-3'>2.How will you improve the performance of a React Application?</h4>
                <ol>
                    <li>1.Local state</li>
                    <li>2.Global state</li>
                    <li>3.Server state</li>
                    <li>4.Url state</li>
                </ol>

            </div>


            <div>
                <h4 className='text-primary text-2xl font-bold my-3'>3.How does prototypical inheritance work?</h4>
                </div>

                <div className='mx-16'>
                    <p className=''>The prootytpal inheritance added poperties and method in javascript
                    Here one object can inherit the properties of another objectTraditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object
            </p>
                </div>


                <div>
              <h4 className='text-primary text-2xl font-bold my-3'>4.What is a unit test? Why should write unit tests?</h4>
                </div>

                <div className='mx-16'>
                    <p>The main purpose of unit test is the code is distinguish and check it is run or not  Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. </p>
                </div>


                <div>
                <h4 className='text-primary text-2xl font-bold my-3'>5.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>

                <div className='mx-16'>
                    At first we have to implement filter method then includes name properties

                </div>

                </div>
              

                

            



        </div>
    );
};

export default Blogs;