import {Page, MapTo, withComponentMappingContext } from "@adobe/cq-react-editable-components";
require('./Page.css');

class StaffWebPage extends Page {
    get containerProps() {
        let attrs = super.containerProps;
        attrs.className = (attrs.className || '') + ' StaffWebPage ' + (this.props.cssClassNames || '');
        return attrs
    }
}

MapTo('StaffWeb/components/page/editable/react-page')(withComponentMappingContext(StaffWebPage));
