import router from "roadtrip";

export function Router(constructor) {
    return class extends constructor {
      constructor(args) {
        super(args);
        this.Router = router;
      }
    };
  }

  export default router


