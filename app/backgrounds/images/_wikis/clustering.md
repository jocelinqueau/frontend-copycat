# Clustering

## Understanding K-Means Clustering

K-Means clustering is a method used to divide a set of data points into k groups (or clusters) based on their similarities. In the context of images, each data point is a pixel represented by its RGB color values. The goal is to find k dominant colors in the image by grouping similar colors together.

```ts
const kMeans = (input: tf.Tensor3D, k: number) => {
  // Step 1: Flatten the image tensor into a 2D tensor where each row is a pixel's RGB values
  const inputFlat = input.reshape([-1, 3]);
  
  // Step 2: Initialize 'k' random centroids in the RGB color space
  let centroids = tf.randomUniform([k, 3]);
  
  // Step 3: Create an array to store the cluster assignments for each pixel
  let assignments = tf.zeros([inputFlat.shape[0]]).toInt();
  
  // Step 4: Run 10 iterations of the K-Means algorithm
  for (let i = 0; i < 10; i++) {
    // Compute the squared distances between each pixel and each centroid
    const distances = tf.sub(inputFlat.expandDims(1), centroids.expandDims(0)).square().sum(2);
    
    // Assign each pixel to the nearest centroid
    assignments = distances.argMin(1);
    
    // Update each centroid to be the mean of the pixels assigned to it
    centroids = tf.stack(
      Array.from({ length: k }, (_, c) => {
        const mask = assignments.equal(c).expandDims(1);
        const cluster = inputFlat.mul(mask);
        const count = mask.sum(0).toFloat();
        return cluster.sum(0).div(count);
      })
    );
  }
  
  // Return the final centroids as the dominant colors
  return centroids;
};
```