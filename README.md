# Meteor Stylus Package, edited to work with mixins.

This is a drop-in replacement for meteor's core stylus package. It allows mixins. To use, simply create a `lib/mixin` folder and put your `mymixin.styl` into it. Any `.styl` in a folder named `mixin` will be assumed to be a mixin.

# Usage Example

Have some files like these:

    /myapp/client/css/lib/mixin/colors.styl
    /myapp/client/css/lib/mixin/shorthand.styl
    /myapp/client/css/mystyle.styl
    /myapp/client/css/anotherstyl.styl