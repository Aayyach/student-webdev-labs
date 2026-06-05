## Code Review Exercise

### Issue #1: Reset Button

The reset button doesn't empty the filled out fields once the user presses it. This is an issue because a user is expecting the fields to be emptied once the button is pressed, which it doesn't accomplish. To solve this issue, the div with the class "form space-evenly-distributed-row-container form-buttons-container" needs to be moved into the form tag.

Initial code:

```
<div class="dark-background-container">
    <form id="RequestInfo" class="content-container form">
            <h1>Tell us what you want to learn more</h1>
            <div
            class="space-between-distributed-row-container vertically-stacked-sm-screen-container"
            >
            <p class="label-input-group form-element-container">
                <span class="form-label">Name</span>
                <input
                aria-label="name"
                class="form-input-box"
                type="text"
                id="name"
                name="name"
                />
            </p>
            <p class="label-input-group form-element-container">
                <span class="form-label">Username</span>
                <input
                aria-label="username"
                class="form-input-box"
                type="text"
                id="username"
                name="username"
                />
            </p>
            </div>
            <div
            class="space-between-distributed-row-container vertically-stacked-sm-screen-container"
            >
            <p class="label-input-group form-element-container">
                <span class="form-label">Email</span>
                <input
                aria-label="email"
                class="form-input-box"
                type="email"
                id="email"
                name="email"
                />
            </p>
            <p class="label-input-group form-element-container">
                <span class="form-label">Phone Number</span>
                <input
                aria-label="phone"
                class="form-input-box"
                type="tel"
                id="phone-number"
                name="phone-number"
                />
            </p>
            </div>
            <div class="form-fieldset form-element-container">
            <p class="form-label">What breeds would you like to learn?</p>
            <div>
                <input type="checkbox" id="siamese" name="breed1" value="siamese" />
                <label for="siamese">Siamese Cat</label>
            </div>
            <div>
                <input
                type="checkbox"
                id="british-shorthair"
                name="breed2"
                value="british-shorthair"
                />
                <label for="british-shorthair">British Shorthair</label>
            </div>
            <div>
                <input
                type="checkbox"
                id="maine-coon"
                name="breed3"
                value="maine-coon"
                />
                <label for="maine-coon">Maine Coon</label>
            </div>
            <div>
                <input
                type="checkbox"
                id="persian-cat"
                name="breed4"
                value="persian-cat"
                />
                <label for="persian-cat">Persian Cat</label>
            </div>
            <div>
                <input type="checkbox" id="ragdoll" name="breed5" value="ragdoll" />
                <label for="ragdoll">Ragdoll</label>
            </div>
            <div>
                <input
                type="checkbox"
                id="sphynx-cat"
                name="breed6"
                value="sphynx-cat"
                />
                <label for="sphynx-cat">Sphynx Cat</label>
            </div>
            <div>
                <input
                type="checkbox"
                id="american-shorthair"
                name="breed"
                value="american-shorthair"
                />
                <label for="american-shorthair">American Shorthair</label>
            </div>
            </div>
            <label class="form-label" for="message"
            >Feel free to leave a message to us</label
            >
            <textarea
            class="form-textarea form-element-container"
            name="message"
            id="message"
            cols="30"
            rows="10"
            ></textarea>
        </form>
        <div
            class="form space-evenly-distributed-row-container form-buttons-container"
        >
            <input class="form-button" type="submit" value="submit" />
            <input class="form-button" type="reset" value="reset" />
        </div>
    </div>
```

Updated code:

```
<div class="dark-background-container">
      <form id="RequestInfo" class="content-container form">
        <h1>Tell us what you want to learn more</h1>
        <div
          class="space-between-distributed-row-container vertically-stacked-sm-screen-container"
        >
          <p class="label-input-group form-element-container">
            <span class="form-label">Name</span>
            <input
              aria-label="name"
              class="form-input-box"
              type="text"
              id="name"
              name="name"
            />
          </p>
          <p class="label-input-group form-element-container">
            <span class="form-label">Username</span>
            <input
              aria-label="username"
              class="form-input-box"
              type="text"
              id="username"
              name="username"
            />
          </p>
        </div>
        <div
          class="space-between-distributed-row-container vertically-stacked-sm-screen-container"
        >
          <p class="label-input-group form-element-container">
            <span class="form-label">Email</span>
            <input
              aria-label="email"
              class="form-input-box"
              type="email"
              id="email"
              name="email"
            />
          </p>
          <p class="label-input-group form-element-container">
            <span class="form-label">Phone Number</span>
            <input
              aria-label="phone"
              class="form-input-box"
              type="tel"
              id="phone-number"
              name="phone-number"
            />
          </p>
        </div>
        <div class="form-fieldset form-element-container">
          <p class="form-label">What breeds would you like to learn?</p>
          <div>
            <input type="checkbox" id="siamese" name="breed1" value="siamese" />
            <label for="siamese">Siamese Cat</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="british-shorthair"
              name="breed2"
              value="british-shorthair"
            />
            <label for="british-shorthair">British Shorthair</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="maine-coon"
              name="breed3"
              value="maine-coon"
            />
            <label for="maine-coon">Maine Coon</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="persian-cat"
              name="breed4"
              value="persian-cat"
            />
            <label for="persian-cat">Persian Cat</label>
          </div>
          <div>
            <input type="checkbox" id="ragdoll" name="breed5" value="ragdoll" />
            <label for="ragdoll">Ragdoll</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sphynx-cat"
              name="breed6"
              value="sphynx-cat"
            />
            <label for="sphynx-cat">Sphynx Cat</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="american-shorthair"
              name="breed"
              value="american-shorthair"
            />
            <label for="american-shorthair">American Shorthair</label>
          </div>
        </div>
        <label class="form-label" for="message"
          >Feel free to leave a message to us</label
        >
        <textarea
          class="form-textarea form-element-container"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <div
          class="form space-evenly-distributed-row-container form-buttons-container"
        >
          <input class="form-button" type="submit" value="submit" />
          <input class="form-button" type="reset" value="reset" />
        </div>
      </form>
    </div>
```

### Issue #2: Load New Cat Facts Button and Loader Gif

If a user presses the "Load New Cat Facts" button, it hides the existing cat facts and doesn't provide the expected functionality of fetching new cat facts. After pressing the button multiple times, the cat facts do not come back or load for the user. This is an issue because the user is expecting new cat facts to load, but the button performs the opposite effect. Since the loader gif is also missing, it could confuse the user because they do not know what is happening when they press the button.

The reason this issue was happening was because of a TypeError where the querySelector() method couldn't locate the loading-container because its class was set to "display-none" when initially loading the webpage, so it was returning a null value. To solve this issue, I added an id of loader-gif to the div with the "loading-container" class and used the method getElementById instead, which resolved the TypeError exception because it doesn't rely on the class.

I also added a conditional statement to check if the img element already existed in the DOM so it doesn't get appended to the webpage multiple times. I added styles for the loading-container in the styles.css file so that the loader gif was displayed in the middle of the container, and finally I set the "loading-container" div class to "loading-container" at the beginning of the fetchCatFacts function to remove its initial class of "display-none."

![Image of the TypeError in browser console](../../webdev2/images/TypeError.png)
This is the TypeError exception that was initially raised.

![Image of HTML after interacting with the DOM](../../webdev2/images/HTML.png)
This image is to show that the class of the loading-container was actually initially set to display-none.

Initial code:

**index.html:**

```
<div id="CatFacts" class="content-container">
  <h1>Cat Facts</h1>
  <div class="loading-container"></div>
  <div id="cat-facts-list"></div>
  <a class="reload-cat-facts">Load New Cats Facts</a>
</div>
```

**index.js:**

```
const createLoadingContainer = function () {
  const loadingContainer = document.querySelector('.loading-container');
  const loader = document.createElement('img');
  loader.src = '../../images/loader.gif';
  loader.alt = 'loader gif while the data loads';
  loader.width = 60;
  loader.height = 60;
  loadingContainer.append(loader);
};

const fetchCatFacts = async function () {
  const catFactsList = document.getElementById('cat-facts-list');
  catFactsList.replaceChildren();

  createLoadingContainer();

  try {
    const response = await fetch('https://catfact.ninja/facts?limit=10');
    const data = await response.json();

    data.data.forEach((element) => {
      const catFactItem = document.createElement('p');
      catFactItem.setAttribute('class', 'cat-fact-list-item');
      catFactItem.textContent = element.fact;
      catFactsList.append(catFactItem);
    });
  } catch (error) {
    console.error('Error fetching cat facts:', error);
  } finally {
    const loading = document.querySelector('.loading-container');
    loading.setAttribute('class', 'display-none');
  }
};

fetchCatFacts();
```

Updated code:

**index.html:**

```
<div id="CatFacts" class="content-container">
  <h2>Cat Facts</h2>
  <div id="loader-gif" class="loading-container"></div>
  <div id="cat-facts-list"></div>
  <a class="reload-cat-facts">Load New Cats Facts</a>
</div>
```

**index.js:**

```
const createLoadingContainer = function () {
  const loadingContainer = document.getElementById('loader-gif')
  const loader = document.createElement("img");
  loader.setAttribute('class', 'loader')
  loader.src = '../../images/loader.gif';
  loader.alt = 'loader gif while the data loads';
  loader.width = 60;
  loader.height = 60;
  if (loadingContainer.querySelector('.loader') === null)
    loadingContainer.append(loader);
};

const fetchCatFacts = async function () {
  const catFactsList = document.getElementById('cat-facts-list');
  catFactsList.replaceChildren();

  createLoadingContainer();
  const loading = document.getElementById('loader-gif')
  loading.setAttribute('class', 'loading-container')

  try {
    const response = await fetch('https://catfact.ninja/facts?limit=10');
    const data = await response.json();

    data.data.forEach((element) => {
      const catFactItem = document.createElement('p');
      catFactItem.setAttribute('class', 'cat-fact-list-item');
      catFactItem.textContent = element.fact;
      catFactsList.append(catFactItem);
    });
  } catch (error) {
    console.error('Error fetching cat facts:', error);
  } finally {
    loading.setAttribute('class', 'display-none');
  }
};

fetchCatFacts();
```

**styles.css**

```
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Issue #3: HTML Heading Accessibility

For accessibility purposes, semantic HTML should follow the correct heading structure. This means that there should only be one h1 on a webpage followed by h2, h3, etc. However, in the code provided there are multiple h1 elements throughout the HTML code. To solve this issue, we need to ensure that there is only one h1 and change the rest of them to h2 followed by h3 depending on the sections structure.

**Note:** Code has been omitted to keep this section short. Most of the heading elements are nested in other HTML elements.

Initial Code:

```
        <h1>Introduction</h1>
```

```
      <h1 class="clear-margin-bottom">History</h1>
            <h2 class="clear-margin-top">Origin</h2>
            <h2 class="clear-margin-top">Acceptance</h2>
            <h2 class="clear-margin-top">Popularity</h2>
```

```
        <h1>Characteristics</h1>
            <h2>Ears</h2>
            <h2>Body</h2>
            <h2>Coat</h2>
            <h2>Temperament</h2>
            <h2>Habits</h2>
```

```
      <h1>Cat Facts</h1>
```

```
<h1>Tell us what you want to learn more</h1>
```

Updated Code:

```
        <h1>Introduction</h1>
```

```
      <h2 class="clear-margin-bottom">History</h2>
            <h3 class="clear-margin-top">Origin</h3>
            <h3 class="clear-margin-top">Acceptance</h3>
            <h3 class="clear-margin-top">Popularity</h3>
```

```
        <h2>Characteristics</h2>
            <h3>Ears</h3>
            <h3>Body</h3>
            <h3>Coat</h3>
            <h3>Temperament</h3>
            <h3>Habits</h3>
```

```
      <h2>Cat Facts</h2>
```

```
<h2>Tell us what you want to learn more</h2>
```

### Issue #4: WAVE Empty Button

When running the WAVE accessibility audit, two buttons are flagged for being empty. This is an accessibility issue because it affects how a screen-reader might read the webpage. To solve this issue, an aria-label and title must be added to these button elements.

Initial Code:

```
          <div class="popup-section">
            <div class="space-between-distributed-row-container">
              <h3>Origin</h3>
              <button class="close-popup-button">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <p>
              The original Scottish Fold was a white barn cat named Susie, who
              was found at a farm near Coupar Angus in Perthshire, Scotland, in
              1961. Susie's ears had an unusual fold in their middle, making her
              resemble an owl. When Susie had kittens, two of them were born
              with folded ears, and one was acquired by William Ross, a
              neighbouring farmer and cat-fancier. Ross registered the breed
              with the Governing Council of the Cat Fancy (GCCF) in the United
              Kingdom in 1966 and started to breed Scottish Fold kittens with
              the help of geneticist Pat Turner. The breeding programme produced
              76 kittens in the first three years - 42 with folded ears and 34
              with straight ears. The conclusion from this was that the ear
              mutation is due to a simple dominant gene.
              <br />
              Susie's only reproducing offspring was a female Fold named Snooks
              who was also white; a second kitten was neutered shortly after
              birth. Three months after Snooks' birth, Susie was killed by a
              car. All Scottish Fold cats share a common ancestry to Susie.
            </p>
          </div>
```

```
        <div class="popup-section-container">
          <div class="popup-section">
            <div class="space-between-distributed-row-container">
              <h3>Acceptance</h3>
              <button class="close-popup-button">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <p>
              The breed was not accepted for showing in Europe and the GCCF
              withdrew registrations in 1971 due to crippling deformity of the
              limbs and tail in some cats and concerns about genetic
              difficulties and ear problems such as infection, mites, and
              deafness, but the Folds were exported to America and the breed
              continued to be established using crosses with British Shorthairs
              and American Shorthairs. Since the initial concerns were brought,
              the Fold breed has not had the mite and infection problems, though
              wax buildup in the ears may be greater than in other cats. The
              concerns about deformities may have been caused by
              osteochondrodysplasia, which causes abnormalities in bone and
              cartilage throughout the body.
            </p>
          </div>
```

Updated Code:

```
          <div class="popup-section">
            <div class="space-between-distributed-row-container">
              <h3>Origin</h3>
              <button
                class="close-popup-button"
                aria-label="close popup window"
                title="close popup window"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <p>
              The original Scottish Fold was a white barn cat named Susie, who
              was found at a farm near Coupar Angus in Perthshire, Scotland, in
              1961. Susie's ears had an unusual fold in their middle, making her
              resemble an owl. When Susie had kittens, two of them were born
              with folded ears, and one was acquired by William Ross, a
              neighbouring farmer and cat-fancier. Ross registered the breed
              with the Governing Council of the Cat Fancy (GCCF) in the United
              Kingdom in 1966 and started to breed Scottish Fold kittens with
              the help of geneticist Pat Turner. The breeding programme produced
              76 kittens in the first three years - 42 with folded ears and 34
              with straight ears. The conclusion from this was that the ear
              mutation is due to a simple dominant gene.
              <br />
              Susie's only reproducing offspring was a female Fold named Snooks
              who was also white; a second kitten was neutered shortly after
              birth. Three months after Snooks' birth, Susie was killed by a
              car. All Scottish Fold cats share a common ancestry to Susie.
            </p>
          </div>
```

```
          <div class="popup-section">
            <div class="space-between-distributed-row-container">
              <h3>Acceptance</h3>
              <button
                class="close-popup-button"
                aria-label="close popup window"
                title="close popup window"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <p>
              The breed was not accepted for showing in Europe and the GCCF
              withdrew registrations in 1971 due to crippling deformity of the
              limbs and tail in some cats and concerns about genetic
              difficulties and ear problems such as infection, mites, and
              deafness, but the Folds were exported to America and the breed
              continued to be established using crosses with British Shorthairs
              and American Shorthairs. Since the initial concerns were brought,
              the Fold breed has not had the mite and infection problems, though
              wax buildup in the ears may be greater than in other cats. The
              concerns about deformities may have been caused by
              osteochondrodysplasia, which causes abnormalities in bone and
              cartilage throughout the body.
            </p>
          </div>
```