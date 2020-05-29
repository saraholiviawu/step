// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Generates a URL for a random image in the images directory and adds an img
 * element with that URL to the page.
 */
function randomizeImage() {
  // The images directory contains 10 images, so generate a random index between
  // 1 and 10.
  const imageIndex = Math.floor(Math.random() * 10) + 1;
  const imgUrl = 'images/travel' + imageIndex + '.jpg';

  const imgElement = document.createElement('img');
  imgElement.src = imgUrl;

  const imageContainer = document.getElementById('random-image-container');
  // Remove the previous image.
  imageContainer.innerHTML = '';
  imageContainer.appendChild(imgElement);


  const captions =
      ['Redondo Beach Pier in California', 'Riviera Village in Southern California', 'Louvre Museum in Paris, France', 'Nice, France',
        'Park Güell in Barcelona, Spain', 'OK Hostel in Madrid, Spain', 'Fiesta de San Juan in Bilbao, Spain', 'Bilbao, Spain', 'Redondo Beach Pier in Southern California', "Yale University in New Haven, Connecticut"];
  
  const caption = captions[imageIndex-1];
  
  const captionContainer = document.getElementById('random-image-caption');
  captionContainer.innerText = caption;
}

