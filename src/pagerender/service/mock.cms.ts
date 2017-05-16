
export const ABOUT: CmsPage =
{
  "children": [
    {
      "children": [
        {
          "children": [
            {
              "children": [
                {
                  "text": "this is the about page",
                  "path": "/jcr:content/content/row/col1/text2",
                  "component": "pagerender-vue-components-base"
                }
              ],
              "classes": "col-md-12",
              "path": "/jcr:content/content/row/col1",
              "component": "example-components-col"
            }
          ],
          "path": "/jcr:content/content/row",
          "component": "example-components-row"
        }
      ],
      "path": "/jcr:content/content",
      "component": "pagerender-vue-structure-container"
    }
  ],
  "siteCSS": [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
  ],
  "siteJS": [
    "https://code.jquery.com/jquery-3.1.1.slim.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js",
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
  ],
  "template": "/content/templates/example",
  "title": "about",
  "siteRoot": "/content/sites/example",
  "pagePath": "/content/sites/example/about",
  "path": "/jcr:content",
  "component": "example-components-page"
};


export class CmsPage{
  children: any;
  siteCSS: any;
  siteJS: any;
  template: string;
  title: string;
  siteRoot: string;
  pagePath: string;
  path: string;
  component: string;
}
