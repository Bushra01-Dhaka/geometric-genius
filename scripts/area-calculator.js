function calculateTriangleArea() {
    const triangleBaseInputField = document.getElementById('triangle-base');
    const triangleBaseValue =parseFloat(triangleBaseInputField.value);

    const triangleHeightInputField = document.getElementById('triangle-height');
    const triangleHeightValue =parseFloat(triangleHeightInputField.value);


    const area = 0.5 * triangleBaseValue * triangleHeightValue;

    
    const triangleAreaField = document.getElementById('triangle-area');
    triangleAreaField.innerText = area;

      // set
      addToCalculateEntry('Triangle:', area);


}

function calculateRectangleArea()
{
    const rectangleWidthInputField = document.getElementById('rectangle-width');
    const rectangleWidthValue = parseFloat(rectangleWidthInputField.value);
    console.log(rectangleWidthValue);

    const rectangleLengthInputField = document.getElementById('rectangle-length');
    const rectangleLengthValue = parseFloat(rectangleLengthInputField.value);
    console.log(rectangleLengthValue);

    const area = rectangleWidthValue * rectangleLengthValue;
    console.log(area);

    const rectangleAreaField = document.getElementById('rectangle-area');
    rectangleAreaField.innerText = area;

      // set
      addToCalculateEntry('Rectangle:', area);
     
}


// reusable fuunction --> reduce duplicate code
function calculateParallelogramArea()
{
    const base = getInputValue('parallelogram-base');
    console.log(base);

    const height = getInputValue('parallelogram-height');
    console.log(height);

    const area = base * height;

   const setAreaValue = setElementInnerText('parallelogram-area', area);
   console.log(setAreaValue);

     // set
     addToCalculateEntry('Paralelogram:', area);

}

function calculateEllipseArea()
{
    const a = getInputValue('ellipse-a');
    console.log(a);

    const b = getInputValue('ellipse-b');
    console.log(b);

    const area = 3.14 * a * b;
    console.log(area.toFixed(2));

    setElementInnerText('ellipse-area',area);

      // set
      addToCalculateEntry('Ellispse:', area);
}


function calculateRhombusArea()
{
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');

    const area =0.5 * d1 * d2;

    setElementInnerText('rhombus-area', area);

    // set
    addToCalculateEntry('Rhombus:', area);
}


function calculatePentagonArea()
{
    const p = getInputValue('pentagon-p');
    console.log(p);
    const b = getInputValue('pentagon-b');
    console.log(b);

    // input validation using isNaN() or I can use correct input type like type='number'
    if(isNaN(p) || isNaN(b))
    {
        alert("Please Provide  a number");
        return;
    }


    const area = 0.5 * p * b;
    console.log(area);

    setElementInnerText('pentagon-area', area);

    //set calculate to 
    addToCalculateEntry('Pentagon:', area);

}




//common function for getting input data
function getInputValue(givenElementId)
{
    const inputField = document.getElementById(givenElementId);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
    
}
//common function for set the vale into area location
function setElementInnerText(givenElementId, areaResult)
{
    const elementField = document.getElementById(givenElementId);
    elementField.innerText = areaResult;
    

}

// dynamically

function addToCalculateEntry(areatype, area)
{
    console.log(areatype + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');
    
 
    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    // adding a class into p tag
    p.classList.add('my-4');
    p.innerHTML =  `${count + 1}. ${areatype} ${area} cm<sup>2</sup> <button onclick="convertionToMeter()" id="btn-meter-convert" class="btn btn-sm btn-success py-2 px-4">Convert to meter?</button>`;

    calculationEntry.appendChild(p);
}




function convertionToMeter()
{
    
    //rectangle part
    const rectangleWidthInputField = document.getElementById('rectangle-width');
    const rectangleWidthValue = parseFloat(rectangleWidthInputField.value);
    console.log(rectangleWidthValue);

    const rectangleLengthInputField = document.getElementById('rectangle-length');
    const rectangleLengthValue = parseFloat(rectangleLengthInputField.value);
    console.log(rectangleLengthValue);

    const rectangleArea = rectangleWidthValue * rectangleLengthValue;
    console.log( rectangleArea);

    const rectangleAreaField = document.getElementById('rectangle-area');
    rectangleAreaField.innerText =  rectangleArea;

    
      //Rectangle meter convertion function call
      const recAreaMeter = convertion(rectangleArea);
      console.log(recAreaMeter);
      //create a new <p> tag to show area after converting to meter
     paragraphTagMake("Rectangle", recAreaMeter);
     


    // triangle part 
    const triangleBaseInputField = document.getElementById('triangle-base');
    const triangleBaseValue =parseFloat(triangleBaseInputField.value);

    const triangleHeightInputField = document.getElementById('triangle-height');
    const triangleHeightValue =parseFloat(triangleHeightInputField.value);


    const triangleArea = 0.5 * triangleBaseValue * triangleHeightValue;

    
    const triangleAreaField = document.getElementById('triangle-area');
    triangleAreaField.innerText = triangleArea;

    //triangle meter convertion function call
    const triAreaMeter = convertion(triangleArea);
    console.log(triAreaMeter);
    //create a new <p> tag to show area after converting to meter
    paragraphTagMake("Triangle", triAreaMeter);
  


    //parellelogram part
    const base = getInputValue('parallelogram-base');
    console.log(base);

    const height = getInputValue('parallelogram-height');
    console.log(height);

    const paralellogramArea = base * height;

   const setAreaValue = setElementInnerText('parallelogram-area', paralellogramArea);
   console.log(setAreaValue);

    //peralello meter convertion function call
    const peraAreaMeter = convertion(paralellogramArea);
    console.log(peraAreaMeter);
    //create a new <p> tag to show area after converting to meter
    paragraphTagMake("Perallelogram", peraAreaMeter);


    // ellipse
    const a = getInputValue('ellipse-a');
    console.log(a);

    const b = getInputValue('ellipse-b');
    console.log(b);

    const elliArea = 3.14 * a * b;
    console.log(elliArea.toFixed(2));

    setElementInnerText('ellipse-area',elliArea);

    //ellipse meter convertion function call
    const elliAreaMeter = convertion(elliArea);
    console.log(elliAreaMeter);
    //create a new <p> tag to show area after converting to meter
    paragraphTagMake("Ellipse", elliAreaMeter.toFixed(2));


    // rombosh
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');

    const romArea =0.5 * d1 * d2;

    setElementInnerText('rhombus-area', romArea);

    //rhombus meter convertion function call
    const romAreaMeter = convertion(romArea);
    console.log(romAreaMeter);
    //create a new <p> tag to show area after converting to meter
    paragraphTagMake("Rhombus", romAreaMeter.toFixed(2));


    //pentagon
    const p = getInputValue('pentagon-p');
    console.log(p);
    const bb = getInputValue('pentagon-b');
    console.log(bb);

    const penArea = 0.5 * p * bb;
    console.log(penArea);

    setElementInnerText('pentagon-area', penArea);

    //ellipse meter convertion function call
    const penAreaMeter = convertion(penArea);
    console.log(penAreaMeter);
    //create a new <p> tag to show area after converting to meter
    paragraphTagMake("Pentagon", penAreaMeter.toFixed(2));











    

     





     


     

  
}

function paragraphTagMake(shapeName, areaOfTheShape)
{
    const p = document.createElement('p');
    p.innerHTML = `<span>${shapeName}: </span> ${areaOfTheShape} m<sup>2</sup>`;


    document.getElementById('calculation-entry').appendChild(p);
}


function convertion(areaVale)
{
    const areaMeterConverter = parseFloat(areaVale * 0.01);
    return areaMeterConverter;

}





