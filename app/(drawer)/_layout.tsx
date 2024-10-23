import {Drawer} from "expo-router/drawer";

export default function () {
    return (
        <Drawer>
            <Drawer.Screen name="/" options={{title: 'Drwer Page'}} />
            {/* <Drawer.Screen name="drawer-test-page" options={{title: 'test page'}} /> */}
        </Drawer>
    );
};