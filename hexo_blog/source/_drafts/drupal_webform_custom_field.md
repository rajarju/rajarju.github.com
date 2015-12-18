title: Writing custom fields for Drupal webforms
-----
There are a lot of modules which has branched out from Drupal to create a universe of its own.
Webforms is one of them. The webform module has been around for quite some time.

Webform works out of the box. It has all the features that you would need to setup a custom form + sumission
system. In addition to this, there are a large number of supporting modules which extends the features of webform.
Webform also has a robust api, which helps in customizing it further.

We are going to look into writing a custom field for webform. It might be very unlikely that you will have to write a module
for a custom field, as in most of the case, you can achieve this with the help of existing fields.


http://www.drupalcontrib.org/api/drupal/contributions!webform!webform.api.php/function/hook_webform_component_info/7