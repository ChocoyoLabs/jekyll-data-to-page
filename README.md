# jekyll-data-to-page
Convert Jekyll Data to Page

Create pages based data files on Jekyll projects.

## Install

    $ npm i jekyll-data-to-page

### Command

    $ jdp bar.yml page

### _data/bar.yml

    - name: Foo 1
      slug: foo-1

    - name: Foo 2
      slug: foo-2

### Output 1 (bar-foo-1.html)

    ---
    title: Foo 1
    layout: page
    slug: foo-1
    parent: bar
    permalink: /bar/foo-1/
    ---

### Output 2 (bar-foo-2.html)

    ---
    title: Foo 2
    layout: page
    slug: foo-2
    parent: bar
    permalink: /bar/foo-2/
    ---
