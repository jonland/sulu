<?php
/*
 * This file is part of the Sulu CMS.
 *
 * (c) MASSIVE ART WebServices GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Sulu\Component\Webspace;

use Sulu\Component\Content\Metadata;

/**
 * Represents a navigation context defined in webspace xml
 */
class NavigationContext
{
    /**
     * @var Metadata
     */
    private $metadata;

    /**
     * @var string
     */
    private $key;

    function __construct($key, $metadata)
    {
        $this->key = $key;
        $this->metadata = new Metadata($metadata);
    }

    /**
     * @param $locale
     * @return null|string
     */
    public function getTitle($locale)
    {
        return $this->metadata->get('title', $locale, ucfirst($this->key));
    }

    /**
     * @return array
     */
    public function getMetadata()
    {
        return $this->metadata->getData();
    }
} 
