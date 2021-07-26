<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => "Hawaii Vegetarian Pizza",
            "description" => "Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella, seasoned with garlic and oregano."
        ];
    }
}
