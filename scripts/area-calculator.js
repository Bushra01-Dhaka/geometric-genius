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

