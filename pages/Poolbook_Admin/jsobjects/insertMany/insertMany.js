export default {
    runQueries: async () => {
        let size = appsmith.store.multi.length; // Get the size of the multi array

        if (size === 1) {
            await Admin_insetslot_0.run();
        } else if (size === 2) {
            await Admin_insetslot_0.run();
            await Admin_insetslot_1.run();
        } else if (size === 3) {
            await Admin_insetslot_0.run();
            await Admin_insetslot_1.run();
            await Admin_insetslot_2.run();
        } else if (size === 4) {
            await Admin_insetslot_0.run();
            await Admin_insetslot_1.run();
            await Admin_insetslot_2.run();
            await Admin_insetslot_3.run();
        } else if (size === 5) {
            await Admin_insetslot_0.run();
            await Admin_insetslot_1.run();
            await Admin_insetslot_2.run();
            await Admin_insetslot_3.run();
            await Admin_insetslot_4.run();
        } else if (size === 6) {
            await Admin_insetslot_0.run();
            await Admin_insetslot_1.run();
            await Admin_insetslot_2.run();
            await Admin_insetslot_3.run();
            await Admin_insetslot_4.run();
            await Admin_insetslot_5.run();
        } else if (size === 7) {
            await Admin_insetslot_0.run();
            await Admin_insetslot_1.run();
            await Admin_insetslot_2.run();
            await Admin_insetslot_3.run();
            await Admin_insetslot_4.run();
            await Admin_insetslot_5.run();
            await Admin_insetslot_6.run();
        } else if (size === 8) {
            await Admin_insetslot_0.run();
            await Admin_insetslot_1.run();
            await Admin_insetslot_2.run();
            await Admin_insetslot_3.run();
            await Admin_insetslot_4.run();
            await Admin_insetslot_5.run();
            await Admin_insetslot_6.run();
            await Admin_insetslot_7.run();
        } else {
            console.log("Invalid size value");
        }

        // Always run Admin_get_time_slot after inserting slots
        await Admin_get_time_slot.run();
        console.log("Admin_get_time_slot query executed.");
    }
};
