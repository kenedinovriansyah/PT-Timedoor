<?php

namespace Database\Factories;

use App\Models\Cost;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class CostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Cost::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "name" => "Small",
            "price" => $this->faker->numberBetween(5,10),
            'product_id' => Product::first()->id
        ];
    }
}
