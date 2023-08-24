const round = (number: number) => Math.round(number * 100) / 100;

const monitorReducerEnhancer:any = (createStore: any) => (
    reducer: any, initialState: any, enhancer: any) => {
    const monitorReducer = (state: any, action: any) => {
        const start = performance.now();
        const newState = reducer(state, action);
        const end = performance.now();
        const diff = round(end - start);

        console.log('Reducer process time:', diff);

        return newState;
    }

    return createStore(monitorReducer, initialState, enhancer)
}


export default monitorReducerEnhancer