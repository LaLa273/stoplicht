input.onButtonPressed(Button.A, function () {
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
})
basic.forever(function () {
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
})
