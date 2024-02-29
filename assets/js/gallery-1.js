import lightGallery from "https://cdn.skypack.dev/lightgallery@2.4.0";

import lgZoom from "https://cdn.skypack.dev/lightgallery@2.4.0/plugins/zoom";
import lgThumbnail from "https://cdn.skypack.dev/lightgallery@2.4.0/plugins/thumbnail";

const $lgContainer = document.getElementById("inline-gallery-container");

const inlineGallery = lightGallery($lgContainer, {
  container: $lgContainer,
  dynamic: true,
  // Turn off hash plugin in case if you are using it
  // as we don't want to change the url on slide change
  hash: false,
  // Do not allow users to close the gallery
  closable: false,
  // Add maximize icon to enlarge the gallery
  showMaximizeIcon: true,
  // Append caption inside the slide item
  // to apply some animation for the captions (Optional)
  appendSubHtmlTo: ".lg-item",
  // Delay slide transition to complete captions animations
  // before navigating to different slides (Optional)
  // You can find caption animation demo on the captions demo page
  slideDelay: 400,
  plugins: [lgZoom, lgThumbnail],
  dynamicEl: [ 
    {
      src:
        "https://agamwaterindustries.com/assets/img/certifications/certificate-1.webp",
    //   responsive:
    //     "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800",
      thumb:
        "https://agamwaterindustries.com/assets/img/certifications/certificate-1.webp",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
    },
    {
        src:
          "https://agamwaterindustries.com/assets/img/certifications/certificate-1.webp",
      //   responsive:
      //     "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800",
        thumb:
          "https://agamwaterindustries.com/assets/img/certifications/certificate-1.webp",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                      <p>Published on November 13, 2018</p>
                  </div>`
      },
      {
        src:
          "https://agamwaterindustries.com/assets/img/certifications/certificate-1.webp",
      //   responsive:
      //     "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800",
        thumb:
          "https://agamwaterindustries.com/assets/img/certifications/certificate-1.webp",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                      <p>Published on November 13, 2018</p>
                  </div>`
      },
      {
        src:
          "https://agamwaterindustries.com/assets/img/certifications/certificate-1.webp",
      //   responsive:
      //     "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800",
        thumb:
          "https://agamwaterindustries.com/assets/img/certifications/certificate-1.webp",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                      <p>Published on November 13, 2018</p>
                  </div>`
      },


   ],

  // Completely optional
  // Adding as the codepen preview is usually smaller
  thumbWidth: 60,
  thumbHeight: "40px",
  thumbMargin: 4
});

setTimeout(() => {
  inlineGallery.openGallery();
}, 200);
