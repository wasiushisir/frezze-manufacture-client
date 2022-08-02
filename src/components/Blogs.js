import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center items-center mt-12'>
            <div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium text-primary">
                    1.How will you improve the performance of a React Application?
                    </div>
                    <div class="collapse-content">
                        <p>Use Production Build,Use React.Suspense and React.Lazy for Lazy Loading Components,Use React.memo for Component Memoization,Virtualize a Large List Using react-window,Wrapping up</p>
                    
                    </div>
                </div>
    
            </div>



            <div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium text-primary">
                    2..How does prototypical inheritance work?
                    </div>
                    <div class="collapse-content">
                    <p>The prootytpal inheritance added poperties and method in javascript
                    Here one object can inherit the properties of another objectTraditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object</p>
                   
                    </div>
                </div>
            </div>





            <div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium text-primary">
                    3.What is a unit test? Why should write unit tests?
                    </div>
                    <div class="collapse-content">
                    <p>The main purpose of unit test is the code is distinguish and check it is run or not  Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. </p>
                   
                    </div>
                </div>
            </div>


            <div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium text-primary">
                    4.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                    </div>
                    <div class="collapse-content">
                    <p> At first we have to implement filter method then includes name properties.The main purpose of unit test is the code is distinguish and check it is run or not  Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. </p>
                   
                    </div>
                </div>
            </div>













           









        </div>
    );
};

export default Blogs;