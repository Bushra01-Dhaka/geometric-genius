function calculateTriangleArea() {
    const triangleBaseInputField = document.getElementById('triangle-base');
    const triangleBaseValue =parseFloat(triangleBaseInputField.value);

    const triangleHeightInputField = document.getElementById('triangle-height');
    const triangleHeightValue =parseFloat(triangleHeightInputField.value);


    const area = 0.5 * triangleBaseValue * triangleHeightValue;

    
    const triangleAreaField = document.getElementById('triangle-area');
    triangleAreaField.innerText = area;


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
}


function calculateRhombusArea()
{
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');

    const area =0.5 * d1 * d2;

    setElementInnerText('rhombus-area', area);
}


function calculatePentagonArea()
{
    const p = getInputValue('pentagon-p');
    console.log(p);
    const b = getInputValue('pentagon-b');
    console.log(b);

    const area = 0.5 * p * b;
    console.log(area);

    setElementInnerText('pentagon-area', area);
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




