function waterContainer(heights) {
    let start = 0;
    let end = heights.length - 1;
    let maxArea = 0;

    while(start < end) {
        if(heights[start] < heights[end]) {
            maxArea = Math.max(maxArea, heights[start] * (end - start));
            start++;
        } else {
            maxArea = Math.max(maxArea, heights[end] * (end - start));
            end--;
        }
    }

    return maxArea;
}

console.log(waterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]))